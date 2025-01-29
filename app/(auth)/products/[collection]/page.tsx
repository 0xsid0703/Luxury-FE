import ProductPage from "@/components/products/ProductMain";
import { getCollectionProducts } from "@/lib/shopify";
import { redirect } from "next/navigation";
import React from "react";
import CartModal from '@/components/cart/modal';

export default async function Page(props: { params: Promise<{ collection: string }> }) {
  const { collection } = await props.params;
  const products = await getCollectionProducts({ collection });
  if (!collection) {
    redirect(`/`);
  }

  return <div className="relative">
    <ProductPage products={products} />
    <div className="fixed sm:right-20 sm:bottom-20 right-10 bottom-10 z-50">
      <CartModal />
    </div>
  </div>;
}
 