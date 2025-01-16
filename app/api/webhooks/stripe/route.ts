import { NextResponse, type NextRequest } from "next/server";

import { handleEvent, stripe, type Stripe } from "@/lib/stripe";

const handler = async (req: NextRequest) => {
  const payload = await req.text();
  const signature = req.headers.get("Stripe-Signature")!;
  console.log("Webhook triggered: ", process.env.STRIPE_WEBHOOK_SECRET);
  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    ) as Stripe.DiscriminatedEvent;
    await handleEvent(event);

    console.log("✅ Handled Stripe Event", event.type);
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.log(`❌ Error when handling Stripe Event: ${message}`);
    return NextResponse.json({ error: message }, { status: 400 });
  }
};

export { handler as GET, handler as POST };
