import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { product_id, bidder, bid_amount, min_increment } = await req.json();
  if (!product_id || !bidder || !bid_amount) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_API_KEY!
  const SHOPIFY_ADMIN_URL = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/${process.env.SHOPIFY_API_VERSION}/graphql.json`;

  try {
    const currentAuction = await axios.post(`${process.env.NEXTAUTH_URL}/api/auction/history/`, {
      product_id,
    });
    const { highestBid, bidHistory } = currentAuction.data;
    if (highestBid > bid_amount) {
      return NextResponse.json({ error: "Your bid is lower than the current highest bid" }, { status: 400 });
    } else if (highestBid + min_increment > bid_amount) {
      return NextResponse.json({ error: "Your bid is lower than the minimum increment" }, { status: 400 });
    }

    const newAuctionData = {
      highestBid: bid_amount,
      winningUser: bidder,
      bidHistory: [...bidHistory, { bidder: bidder, bid_amount, time: new Date().toISOString() }],
    }
    const mutation = `
    mutation {
      productUpdate(input: {
        id: "gid://shopify/Product/${product_id}",
        metafields: [
          {
            namespace: "auction",
            key: "details",
            value: "${JSON.stringify(newAuctionData).replace(/"/g, '\\"')}",
            type: "json"
          }
        ]
      }) {
        product {
          id
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
      body: JSON.stringify({ query: mutation }),
    });
    if (response.ok) {
      return NextResponse.json({ message: "Successfully Bidded!" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
