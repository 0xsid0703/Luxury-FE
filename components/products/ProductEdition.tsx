import React from "react";
import Image from "next/image";
const ProductEdition = () => {
  return (
    <div className="bg-white sm:pb-36 pb-20 sm:px-0 px-6">
      <div className="container mx-auto flex flex-col sm:gap-[90px] gap-14">
        <div className="flex flex-col items-center sm:text-6xl text-3xl text-center">
          <span className="font-normal text-[#9C7C55]">
            Limited Edition:
          </span>
          <span className="font-normal text-black">
            Art, Spirit, and Investment Combined
          </span>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-16 gap-10">
          <div className="flex flex-col sm:gap-9 gap-7">
            <div className="w-full aspect-[386/260]">
              <Image
                src={"/desc1.png"}
                width={386}
                height={260}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="sm:text-2xl text-lg sm:font-bold font-semibold">
                Only 300 Bottles Worldwide
              </div>
              <div className="font-medium sm:text-base text-sm text-[#80898B]">
                This exclusive release features{" "}
                <b className="text-[#A88573]">300 hand-designed bottles</b> by
                Shayne Bufog, each a masterpiece in its own right. The limited
                nature of this release ensures both{" "}
                <b className="text-[#A88573]">rarity</b> and
                <b className="text-[#A88573]">investment value</b>, making it a
                must-have for collectors.
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:gap-9 gap-7">
            <Image
              src={"/desc2.png"}
              width={386}
              height={260}
              alt=""
              className="w-full h-auto rounded-lg"
            />
            <div className="flex flex-col gap-3">
              <div className="sm:text-2xl text-lg sm:font-bold font-semibold">
                A Fusion of Art and Spirit
              </div>
              <div className="font-medium sm:text-base text-sm text-[#80898B]">
                Combining the{" "}
                <b className="text-[#A88573]">centuries-old heritage</b> of
                Cardinal Du Four with Shayne Bufog’s{" "}
                <b className="text-[#A88573]">modern artistic flair</b>, this
                collection redefines the meaning of luxury. Each bottle is not
                just a vessel for rare Armagnac but also an{" "}
                <b className="text-[#A88573]">investment in fine art</b> Retail
                Store.
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:gap-9 gap-7">
            <Image
              src={"/desc3.png"}
              width={386}
              height={260}
              alt=""
              className="w-full h-auto rounded-lg"
            />
            <div className="flex flex-col gap-3">
              <div className="sm:text-2xl text-lg sm:font-bold font-semibold">Award-Winning Armagnac</div>
              <div className="font-medium sm:text-base text-sm text-[#80898B]">
                The <b className="text-[#A88573]">21 Rébellion blend</b>,
                which boasts a 30-year average age and includes vintages as
                old as <b className="text-[#A88573]">1976</b>, is a{" "}
                <b className="text-[#A88573]">Double Gold</b> winner at both
                the{" "}
                <b className="text-[#A88573]">
                  San Francisco World Spirits Design Competition
                </b>{" "}
                and the{" "}
                <b className="text-[#A88573]">
                  {"New York World Spirits Competition​."}
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdition;
