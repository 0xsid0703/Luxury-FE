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
        <div className="py-20 flex flex-col gap-16 container mx-auto z-[5]">
          <div className="flex flex-col">
            <span className="text-white text-6xl">About the Brand:</span>
            <span className="text-blendingYellow text-6xl">
              Cardinal Du Four
            </span>
          </div>
          <div className="grid grid-cols-2">
            <Image src={"/product/map.png"} width={440} height={440} alt="" />
            <div className="flex flex-col gap-15">
              <div className="gap-6 flex flex-col text-white">
                <div className="text-xl">
                  <span className="#F3CF72">Cardinal Du Four</span> is one of
                  the most prestigious brands in the world of{" "}
                  <span className="#F3CF72">Armagnac</span>, France’s oldest
                  spirit. With a legacy dating back more than{" "}
                  <span className="#F3CF72">700 years</span>, Cardinal Du Four
                  blends centuries-old craftsmanship with contemporary luxury,
                  making it a leading choice among collectors and connoisseurs
                </div>
                <div className="text-xl">
                  Named after{" "}
                  <span className="#F3CF72">Cardinal Vital Du Four</span>, the
                  brand honors his intellectual legacy and historic discoveries
                  in distillation, which are still celebrated today. By
                  combining ancient traditions with modern design, Cardinal Du
                  Four offers a
                  <span className="#F3CF72">timeless experience</span> that is
                  rooted in{" "}
                  <span className="#F3CF72">authenticity, heritage</span>, and{" "}
                  <span className="#F3CF72">innovation</span>. we need the
                  website link of the brand Cardinal du Four
                </div>
                <Button className="flex flex-row py-7 px-9 w-fit text-black bg-white rounded-full text-lg outline outline-4 outline-[#F4A341]/20 hover:shadow-[0_0_0_0px_black,0_8px_0_0_#FFE281] hover:-translate-y-2 transition-all hover:bg-white">
                  <span>Visit Website</span>
                  <div className="w-[1px] h-6 bg-[#848484]/20"></div>
                  <ArrowRight size={12} color="#000" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#1F1B16] bg-opacity-35 backdrop-blur-sm absolute top-0"></div>
      </div>
    </div>
  );
};

export default ProductBrand;
