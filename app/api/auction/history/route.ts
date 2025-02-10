
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { product_id } = await req.json();
  if (!product_id) return NextResponse.json({ error: "Product ID is required" }, { status: 400 });

  const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_API_KEY!
  const SHOPIFY_ADMIN_URL = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/${process.env.SHOPIFY_API_VERSION}/graphql.json`;
  const query = `
    {
      product(id: "gid://shopify/Product/${product_id}") {
        metafield(namespace: "auction", key: "details") {
          value
        }
      }
    }
  `;

  const response = await fetch(SHOPIFY_ADMIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query }),
  });
  const result = await response.json();
  const auctionDetails = result.data.product?.metafield?.value
    ? JSON.parse(result.data.product.metafield.value)
    : { highestBid: 0, winningUser: "", bidHistory: [] };

  return NextResponse.json(auctionDetails, { status: 200 });
}