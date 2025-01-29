import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
const ProductBrand = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover z-10"
      style={{ backgroundImage: "url(/product/brand-bg.png)" }}
    >
      <div className="flex flex-col relative">
        <div className="sm:py-20 py-10 grid sm:grid-cols-2 grid-cols-1 sm:gap-16 gap-9 container mx-auto z-[5] sm:px-0 px-6">
          <div className="flex flex-col sm:gap-14 gap-7 items-center">
            <div className="flex flex-col sm:text-6xl text-3xl">
              <span className="text-white">About the Brand:</span>
              <span className="text-blendingYellow">
                Cardinal Du Four
              </span>
            </div>
            <Image src={"/product/map.png"} width={440} height={440} alt="" />
          </div>
          <div className="flex flex-col gap-15 bg-[#63151F] sm:py-24 py-10 sm:px-20 px-6 rounded-[32px]">
            <div className="flex flex-col sm:gap-16 gap-8">
              <div className="gap-6 flex flex-col text-white">
                <div className="sm:text-xl text-base">
                  <span className="text-[#F3CF72]">Cardinal Du Four</span> is one of
                  the most prestigious brands in the world of{" "}
                  <span className="text-[#F3CF72]">Armagnac</span>, France’s oldest
                  spirit. With a legacy dating back more than{" "}
                  <span className="text-[#F3CF72]">700 years</span>, Cardinal Du Four
                  blends centuries-old craftsmanship with contemporary luxury,
                  making it a leading choice among collectors and connoisseurs
                </div>
                <div className="sm:text-xl text-base">
                  Named after{" "}
                  Cardinal Vital Du Four, the
                  brand honors his intellectual legacy and historic discoveries
                  in distillation, which are still celebrated today. By
                  combining ancient traditions with modern design, Cardinal Du
                  Four offers a
                  timeless experience that is
                  rooted in{" "}
                  authenticity, heritage, and{" "}
                  innovation. we need the
                  website link of the brand Cardinal du Four
                </div>
              </div>
              <Button className="flex flex-row py-7 px-9 w-fit text-[#0B1934] bg-[#FFBC8A] rounded-full text-lg outline outline-4 outline-[#F4A341]/20 hover:shadow-[0_0_0_0px_black,0_8px_0_0_#FFE281] hover:-translate-y-2 transition-all hover:bg-[#FFBC8A]">
                <span>Visit Website</span>
                <ArrowRight size={12} color="#000" />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#1F1B16] bg-opacity-35 backdrop-blur-sm absolute top-0"></div>
      </div>
    </div>
  );
};

export default ProductBrand;
