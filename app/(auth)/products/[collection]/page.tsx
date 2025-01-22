import ProductPage from "@/components/products/ProductMain";
import { getCollectionProducts } from "@/lib/shopify";
import React from "react";

export default async function Page(props: { params: Promise<{ collection: string }> }) {
  const { collection } = await props.params;
  const products = await getCollectionProducts({ collection });
  console.log({ products })

  return <div><ProductPage products={products} /></div>;
}


