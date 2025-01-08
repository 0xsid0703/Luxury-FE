import { NextRequest, NextResponse } from "next/server";

interface MailchimpError {
  detail: string;
}

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, {status: 400});
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY!;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID!;
  console.log({API_KEY}, {LIST_ID})
  const DATACENTER = API_KEY.split("-")[1];
  console.log({DATACENTER})
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error: MailchimpError = await response.json();
      return NextResponse.json({ error: error.detail }, {status: 400});
    }

    return NextResponse.json({ message: "Successfully subscribed!" }, {status: 200});
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, {status: 500});
  }
}
