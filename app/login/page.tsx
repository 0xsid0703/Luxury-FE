import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

import { UserAuthForm } from "@/components/ui/user-auth-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function LoginPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Image
            src="/signin-logo.svg"
            className="mx-auto"
            width="64"
            height="64"
            alt=""
          />
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            {"Welcome Back"}
          </h1>
          <p className="text-sm text-muted-foreground text-white">
            {"Sign in to your account"}
          </p>
        </div>
        <UserAuthForm />
        {/* <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href={`/${lang}/register`}
            className="hover:text-brand underline underline-offset-4"
          >
            {dict.login.singup_title}
          </Link>
        </p> */}
      </div>
    </div>
  );
}
