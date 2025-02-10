import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { product_id, email, bid_amount } = await req.json();
  if (!product_id || !email || !bid_amount) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    const res = await axios.get(`${process.env.SHOPIFY_AUCTION_API_LINK}/api/auction/${product_id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SHOPIFY_AUCTION_API_KEY}`
        }
      });
    
    return NextResponse.json({ message: "Successfully Bidded!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
