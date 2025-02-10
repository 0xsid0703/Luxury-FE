import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { getServerSession, type NextAuthOptions, type User } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { MagicLinkEmail, resend, siteConfig } from "./magic-link";
import axios from "axios";
import prisma from "./prisma";
type UserId = string;
type IsAdmin = boolean;

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      isAdmin: IsAdmin;
      shopifyCustomerId: string | number;
    };
  }

}

declare module "next-auth" {
  interface JWT {
    isAdmin: IsAdmin;
    shopifyCustomerId: string | number;
  }
}
async function findShopifyCustomerByEmail(email: string) {
  const shopifyDomain = process.env.SHOPIFY_STORE_DOMAIN!;
  const response = await axios.get(
    `https://${shopifyDomain}/admin/api/${process.env.SHOPIFY_API_VERSION}/customers/search.json?query=email:${email}`,
    {
      headers: { "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY! },
    }
  );
  return response.data.customers[0]; // Return first matched customer
}

async function syncWithShopify(user: any) {
  const shopifyDomain = process.env.SHOPIFY_STORE_DOMAIN!;
  const existingCustomer = await findShopifyCustomerByEmail(user.email);
  if (!existingCustomer) {
    // Create new customer
    const response = await axios.post(
      `https://${shopifyDomain}/admin/api/${process.env.SHOPIFY_API_VERSION}/customers.json`,
      {
        customer: {
          email: user.email,
          first_name: user.name.split(" ")[0] || "",
          last_name: user.name.split(" ")[1] || "",
          metafields: [
            {
              namespace: 'custom',
              key: 'premium_type',
              value: 'free',
              type: 'single_line_text_field'
            }
          ]
        }
      },
      { headers: { "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY! } }
    );
    return response.data.customer.id;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      httpOptions: { timeout: 15000 },
    }),
    EmailProvider({
      sendVerificationRequest: async ({ identifier, url }) => {
        const user = await prisma.user.findUnique({
          where: {
            email: identifier,
          },
          select: {
            name: true,
            emailVerified: true,
          },
        });
        const userVerified = !!user?.emailVerified;
        const authSubject = userVerified
          ? `Sign-in link for ${(siteConfig as { name: string }).name}`
          : "Activate your account";
        try {
          await resend.emails.send({
            from: process.env.RESEND_FROM!,
            to: identifier,
            subject: authSubject,
            react: MagicLinkEmail({
              firstName: user?.name ?? "",
              actionUrl: url,
              mailType: userVerified ? "login" : "register",
              siteName: (siteConfig as { name: string }).name,
            }),
            // Set this to prevent Gmail from threading emails.
            // More info: https://resend.com/changelog/custom-email-headers
            headers: {
              "X-Entity-Ref-ID": new Date().getTime() + "",
            },
          });
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await syncWithShopify(user);
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Always redirect to the home page after login
      if (url === `${baseUrl}/login`) {
        return `${baseUrl}/pricing`; // Redirect to the home page
      }
      return url || baseUrl;
    },
    session({ token, session }) {
      if (token) {
        if (session.user) {
          session.user.id = token.id as string;
          session.user.name = token.name;
          session.user.email = token.email;
          session.user.image = token.picture;
          session.user.isAdmin = token.isAdmin as boolean;
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      const email = token?.email ?? "";
      const dbUser = await prisma.user.findUnique({
        where: {
          email
        }
      })
      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }
      let isAdmin = false;
      if (process.env.ADMIN_EMAIL) {
        const adminEmails = process.env.ADMIN_EMAIL.split(",");
        if (email) {
          isAdmin = adminEmails.includes(email);
        }
      }
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        isAdmin: isAdmin,
      };
    },
  },
  debug: process.env.IS_DEBUG === "true",
};

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}
