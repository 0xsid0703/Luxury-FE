import Image from "next/image";
import React, { useState } from "react";
import ProductItemWithCollection from "./ProductItemWithCollection";
import { UserSubscriptionPlan } from "@/types";
import VideoModal from "../modal/VideoModal";

type Props = {
  products: any[];
  subscriptionPlan: UserSubscriptionPlan | undefined;
  collectionData: any
};

const ProductHero = ({ products, subscriptionPlan, collectionData }: Props) => {
  const [video, setVideo] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-fit bg-white sm:px-0 px-4 pb-20">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full h-auto -mt-20 relative">
          <Image
            src={"/product/hero.png"}
            width={1024}
            height={1024}
            className="w-full h-auto rounded-xl"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer w-fit h-fit flex flex-col sm:gap-5 gap-2 items-center">
            <Image
              src={"/play.png"}
              className="sm:w-[150px] sm:h-[150px] w-14 h-14"
              width={150}
              height={150}
              onClick={() => {
                setVideo(JSON.parse(collectionData.metafields.find((metafield: any) => metafield.key === "video")?.value).url)
                setIsOpen(true)
              }}
              alt=""
            />
            <span className="text-white sm:text-base font-semibold text-center text-[10px]">WATCH VIDEO</span>
          </div>

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
                    collection={collectionData.handle}
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
      {
        isOpen && (
          <VideoModal video={video} onClose={() => setIsOpen(false)} />
        )
      }
    </div>
  );
};

export default ProductHero;
