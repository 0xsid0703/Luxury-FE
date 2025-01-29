import Image from "next/image";
import React from "react";
import ProductItemWithCollection from "./ProductItemWithCollection";
import { UserSubscriptionPlan } from "@/types";

type Props = {
  products: any[];
  collection: string;
  subscriptionPlan: UserSubscriptionPlan
};

const ProductHero = ({ products, collection, subscriptionPlan }: Props) => {
  return (
    <div className="w-full h-fit bg-white sm:px-0 px-4 pb-20">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full h-auto -mt-20">
          <Image
            src={"/product/hero.png"}
            width={1024}
            height={1024}
            className="w-full h-auto rounded-xl"
            alt=""
          />
        </div>
        <div className="mt-20 flex flex-col sm:gap-16 gap-10">
          <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-20 gap-9">
            <div className="sm:text-3xl text-2xl text-[#0B1934] font-medium">
              Key Hightlights
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[#0B1934] sm:text-xl text-lg font-bold">Blend</div>
              <div className="sm:text-base text-sm text-[#2A2B39]">
                30-year average age, including vintages as old as 1976.
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[#0B1934] sm:text-xl text-lg font-bold">Design</div>
              <div className="sm:text-base text-sm text-[#2A2B39]">
                Exclusive bottle artwork by Robert King, transforming each
                piece into a collectible masterpiece
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[#0B1934] sm:text-xl text-lg font-bold">Awards</div>
              <div className="sm:text-base text-sm text-[#2A2B39]">
                Double Gold Winner at San Francisco World Spirits Design
                Competition and New York World Spirits Competition.
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#DFE1E6]"></div>
          <div className="flex flex-col sm:gap-12 gap-5">
            <div className="sm:text-3xl text-2xl text-[#0B1934]">Explore Products</div>
            <div className="flex flex-col gap-9">
              {
                products.length > 0 && products.map((product: any, index: number) => (
                  <ProductItemWithCollection
                    key={index}
                    product={product}
                    collection={collection}
                    product_image={product.featuredImage.url}
                    collection_name={product.collection.title}
                    volume={product.metafields.find((metafield: any) => metafield.key === "volume").value}
                    product_name={product.title}
                    edition={product.tags[0]}
                    artist={product.metafields.find((metafield: any) => metafield.key === "artist").value}
                    product_type={product.metafields.find((metafield: any) => metafield.key === "type").value}
                    price_amount={product.variants[0].price.amount}
                    currency={product.variants[0].price.currencyCode}
                    subscriptionPlan={subscriptionPlan}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
