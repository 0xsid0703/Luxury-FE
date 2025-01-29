import ProductPage from "@/components/products/ProductMain";
import { getCollectionProducts } from "@/lib/shopify";
import { redirect } from "next/navigation";
import React from "react";
import CartModal from '@/components/cart/modal';
import { getCurrentUser } from "@/lib/auth";
import { trpc } from "@/trpc/server";

export default async function Page(props: { params: Promise<{ collection: string }> }) {
  const { collection } = await props.params;
  const user = await getCurrentUser();
  const products = await getCollectionProducts({ collection });
  if (!collection) {
    redirect(`/`);
  }
  let subscriptionPlan;
  if (user) {
    subscriptionPlan = await trpc.stripe.userPlans.query();
  }
  return (subscriptionPlan && <div className="relative">
    <ProductPage products={products} collection={collection} subscriptionPlan={subscriptionPlan} />
    <div className="fixed sm:right-20 sm:bottom-20 right-10 bottom-10 z-50">
      <CartModal />
    </div>
  </div>);
}
