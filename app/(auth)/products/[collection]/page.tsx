import ProductPage from "@/components/products/ProductMain";
import { getAuctionProduct, getCollectionProducts } from "@/lib/shopify";
import { redirect } from "next/navigation";
import React from "react";
import CartModal from '@/components/cart/modal';
import { getCurrentUser } from "@/lib/auth";
import { trpc } from "@/trpc/server";
import { getCollection } from "@/lib/shopify";

export default async function Page(props: { params: Promise<{ collection: string }> }) {
  const { collection } = await props.params;
  const user = await getCurrentUser();
  const collectionData = await getCollection(collection);
  const products:any[] = await getCollectionProducts({ collection });
  
  async function fetchAllAuctionProducts(prods: any[]) {
    await Promise.all(
      prods.map(async (product) => {
        const product_id = product.id.split('/').pop() || "";

        const auctionProduct = await getAuctionProduct(product_id);
        product.auctionProduct = auctionProduct;
        return true
      })
    );

    return prods; // Return the final list of auction products
  }

  await fetchAllAuctionProducts(products);

  if (!collection) {
    redirect(`/`);
  }
  let subscriptionPlan;
  if (user) {
    subscriptionPlan = await trpc.stripe.userPlans.query();
  }
  return (
    <div className="relative">
      <ProductPage products={products} collectionData={collectionData} subscriptionPlan={subscriptionPlan} />
      <div className="fixed sm:right-20 sm:bottom-20 right-10 bottom-10 z-50">
        <CartModal />
      </div>
    </div>
  );
}
