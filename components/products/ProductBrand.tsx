import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
const ProductBrand = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(/product/brand-bg.png)" }}
    >
      <div className="relative">
        <div className="w-full h-full blur-md bg-[#1F1B16] bg-opacity-35 absolute top-0 z-0"></div>
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
                <Button className="flex flex-row py-5 px-6 w-fit text-black bg-white rounded-full text-lg">
                  <span>Apply for Access</span>
                  <Image
                    src="/right-arrow.svg" // Path relative to the public directory
                    alt="Right Arrow"
                    width={12}
                    height={15}
                    className="text-black" // Tailwind class (won't work for SVGs unless you use inline SVG)
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBrand;
