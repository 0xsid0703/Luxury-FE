import React from "react";
import Image from "next/image";
const ProductEdition = () => {
  return (
    <div className="bg-[#E8E8E8] py-[72px]">
      <div className="container mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center">
          <span className="font-normal text-6xl text-[#9C7C55]">
            Limited Edition:
          </span>
          <span className="font-normal text-6xl text-black">
            Art, Spirit, and Investment Combined
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col p-10 gap-3 rounded-[30px] bg-white">
              <div className="text-2xl font-bold">
                Only 300 Bottles Worldwide
              </div>
              <div className="font-medium text-base text-[#80898B]">
                This exclusive release features{" "}
                <b className="text-[#32302D]">300 hand-designed bottles</b> by
                Shayne Bufog, each a masterpiece in its own right. The limited
                nature of this release ensures both{" "}
                <b className="text-[#32302D]">rarity</b> and
                <b className="text-[#32302D]">investment value</b>, making it a
                must-have for collectors.
              </div>
            </div>
            <div className="w-full  bg-black h-auto rounded-[30px]">
              <Image
                src={"/desc2.png"}
                width={417}
                height={296}
                className="w-full h-auto px-28 py-5 rounded-[30px]"
                alt=""
              />
            </div>
            <div className="flex flex-col p-10 gap-3 rounded-[30px] bg-white">
              <div className="text-2xl font-bold">
                A Fusion of Art and Spirit
              </div>
              <div className="font-medium text-base text-[#80898B]">
                Combining the{" "}
                <b className="text-[#32302D]">centuries-old heritage</b> of
                Cardinal Du Four with Shayne Bufog’s{" "}
                <b className="text-[#32302D]">modern artistic flair</b>, this
                collection redefines the meaning of luxury. Each bottle is not
                just a vessel for rare Armagnac but also an{" "}
                <b className="text-[#32302D]">investment in fine art</b> Retail
                Store.
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="w-2/3 flex flex-row gap-3">
              <div className="w-2/5 bg-[#32302D] rounded-[30px] flex justify-center items-center">
                <Image
                  src={"/product/coin.png"}
                  width={250}
                  height={250}
                  alt=""
                />
              </div>
              <div className="w-3/5 p-10 gap-3 rounded-[30px] bg-white flex flex-col">
                <div className="text-2xl font-bold">Award-Winning Armagnac</div>
                <div className="font-medium text-base text-[#80898B]">
                  The <b className="text-[#32302D]">21 Rébellion blend</b>,
                  which boasts a 30-year average age and includes vintages as
                  old as <b className="text-[#32302D]">1976</b>, is a{" "}
                  <b className="text-[#32302D]">Double Gold</b> winner at both
                  the{" "}
                  <b className="text-[#32302D]">
                    San Francisco World Spirits Design Competition
                  </b>{" "}
                  and the{" "}
                  <b className="text-[#32302D]">
                    {"New York World Spirits Competition​."}
                  </b>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <Image
                src={"/product/drink.png"}
                width={420}
                height={240}
                className="w-full h-auto rounded-[30px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdition;
