import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProductItemWithCollection from "./ProductItemWithCollection";

type Props = {
  products: any[];
};

const ProductHero = ({ products }: Props) => {
  console.log({ products })
  return (
    <div className="w-full h-fit bg-product-hero">
      <div className="container mx-auto flex flex-col pt-36 items-center pb-28">
        <div className="text-[#B5B7B8] text-base">Product Overview</div>
        <div className="flex flex-col items-center">
          <span className="font-normal text-6xl text-[#E3713D]">
            Cardinal Du Four:{" "}
          </span>
          <span className="font-normal text-6xl text-white">
            Craftsmanship, Heritage, and Innovation
          </span>
        </div>
        <div className="mt-12 flex flex-row gap-6">
          <Link href={"/"}><Image src={"/product/instagram.png"} width={24} height={24} alt="" /></Link>
          <Link href={"/"}><Image src={"/product/facebook.png"} width={24} height={24} alt="" /></Link>
          <Link href={"/"}><Image src={"/product/x.png"} width={24} height={24} alt="" /></Link>
          <Link href={"/"}><Image src={"/product/tiktok.png"} width={24} height={24} alt="" /></Link>
        </div>
        <div className="w-full h-auto mt-10">
          <Image
            src={"/product/hero.png"}
            width={340}
            height={340}
            className="w-full h-auto rounded-3xl"
            alt=""
          />
        </div>
        <div className="mt-11 flex flex-col gap-14 px-24">
          <div className="flex flex-col gap-14">
            <div className="text-4xl text-white font-medium">
              Key Hightlights
            </div>
            <div className="grid grid-cols-3 gap-20">
              <div className="flex flex-col gap-3">
                <div className="text-white text-2xl font-bold">Blend</div>
                <div className="text-white text-lg">
                  30-year average age, including vintages as old as 1976.
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-white text-2xl font-bold">Design</div>
                <div className="text-white text-lg">
                  Exclusive bottle artwork by Robert King, transforming each
                  piece into a collectible masterpiece
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-white text-2xl font-bold">Awards</div>
                <div className="text-white text-lg">
                  Double Gold Winner at San Francisco World Spirits Design
                  Competition and New York World Spirits Competition.
                </div>
              </div>
            </div>
          </div>
          {
            products.length > 0 && products.map((product: any, index: number) => (
              <ProductItemWithCollection
                key={index}
                product={product}
                product_image={product.featuredImage.url}
                collection_name={product.collection.title}
                volume={product.metafields.find((metafield: any) => metafield.key === "volume").value}
                product_name={product.title}
                edition={product.tags[0]}
                artist={product.metafields.find((metafield: any) => metafield.key === "artist").value}
                product_type={product.metafields.find((metafield: any) => metafield.key === "type").value}
                price_amount={product.variants[0].price.amount}
                currency={product.variants[0].price.currencyCode}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
