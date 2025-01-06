import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const ProductHero = () => {
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
            width={1200}
            height={640}
            className="w-full h-auto rounded-3xl"
            alt=""
          />
        </div>
        <div className="mt-11 flex flex-row gap-14 px-24">
          <div className="w-2/5 flex flex-col gap-14">
            <div className="text-4xl text-white font-medium">
              Key Hightlights
            </div>
            <div className="flex flex-col gap-8">
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
          <div className="w-3/5 rounded-2xl bg-[#380B11] flex flex-col divide-y divide-white divide-opacity-10 p-10">
            <div className="flex flex-row gap-6 pb-5">
              <div className="w-1/3 text-white font-medium">Brand:</div>
              <div className="w-2/3 text-lg text-white">Cardinal Du Four</div>
            </div>
            <div className="flex flex-row gap-6 py-5">
              <div className="w-1/3 text-white font-medium">Product name:</div>
              <div className="w-2/3 text-lg text-white">
                21 Rébellion Limited Edition (Collaboration with [Artist Name])
              </div>
            </div>
            <div className="flex flex-row gap-6 py-5">
              <div className="w-1/3 text-white font-medium">Edition:</div>
              <div className="w-2/3 text-lg text-white">
                Limited to 500 bottles worldwide
              </div>
            </div>
            <div className="flex flex-row gap-6 py-5">
              <div className="w-1/3 text-white font-medium">Product Type:</div>
              <div className="w-2/3 text-lg text-white">
                Rare Armagnac with custom-designed bottle by Robert King
              </div>
            </div>
            <div className="flex flex-col py-5">
              <span className="font-bold text-white text-lg">
                Available for pre-order:
              </span>
              <div className="flex flex-row justify-between w-full">
                <span className="font-bold text-white text-5xl">$1,254</span>
                <Button className="bg-[#E3713D] outline outline-4 outline-[#D49F5E]/20 hover:outline-[#D49F5E]/50 text-white rounded-full py-7 px-9 text-lg hover:bg-[#E3713D]">
                  Join the Waiting List
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
