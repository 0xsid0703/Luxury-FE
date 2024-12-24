import React from "react";
import Line from "../common/Line";

const ProductMarket = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-col gap-16 py-16">
        <div className="flex flex-col">
          <span className="font-normal text-6xl text-[#9C7C55]">Financial</span>
          <span className="font-normal text-6xl text-[#9C7C55]">
            <span className="text-black">and</span>collaboration
          </span>
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col divide-y divide-[#C1C2C2]">
            <div className="grid grid-cols-2 gap-4 pb-6">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <span className="text-[#787878] text-xl font-bold">
                    Market Volume:
                  </span>
                  <span className="text-[#051B1B] font-semibold text-4xl">
                    $5 billion
                  </span>
                </div>
                <div className="text-[#787878] text-base font-medium">
                  Annual trading volume for collectible luxury spirits
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <span className="text-[#787878] text-xl font-bold">
                    Price Trends:
                  </span>
                  <span className="text-[#051B1B] font-semibold text-4xl">
                    21.5%
                  </span>
                </div>
                <div className="text-[#787878] text-base font-medium">
                  Average growth in value for limited-edition luxury spirits
                  over the past 5 years.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-9 pt-6">
              <div className="flex flex-col gap-3">
                <span className="text-[#787878] text-lg font-extrabold">
                  Liquidity
                </span>
                <span className="text-[#051B1B] text-base font-semibold">
                  Holders (NFT) can list assets on the secondary market or
                  approved partner platforms for trading.
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[#787878] text-lg font-extrabold">
                  Liquidity
                </span>
                <span className="text-[#051B1B] text-base font-semibold">
                  Holders (NFT) can list assets on the secondary market or
                  approved partner platforms for trading.
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border border-black rounded-[24px] p-9 flex flex-col gap-14">
            <div className="flex flex-col gap-2">
              <span className="text-[#051B1B] text-xl font-medium">
                Product's price over time
              </span>
              <span className="text-[#787878] text-lg">2021 - Now</span>
            </div>
            <div className="w-full flex-1">
              <Line />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMarket;
