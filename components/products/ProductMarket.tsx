import React from "react";
import Line from "../common/Line";

const ProductMarket = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-col gap-16 py-16 sm:px-0 px-6">
        <div className="flex flex-col">
          <span className="font-light sm:text-6xl text-3xl text-[#0B1934]">Financial & Market</span>
        </div>
        <div className="flex flex-col px-10 sm:gap-11 gap-5">
          <div className="flex sm:flex-row flex-col sm:gap-10 gap-5">
            <div className="sm:w-1/2 w-full flex flex-col divide-y divide-[#C1C2C2]">
              <div className="grid grid-cols-2 gap-10 pb-6">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#0B1934] sm:text-xl text-sm font-bold">
                      Market Volume:
                    </span>
                    <span className="text-[#0B1934] font-semibold sm:text-4xl text-2xl">
                      $5 billion
                    </span>
                  </div>
                  <div className="text-[#2A2B39] sm:text-base text-xs font-medium">
                    Annual trading volume for collectible luxury spirits
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#0B1934] sm:text-xl text-sm font-bold">
                      Price Trends:
                    </span>
                    <span className="text-[#0B1934] font-semibold sm:text-4xl text-2xl">
                      21.5%
                    </span>
                  </div>
                  <div className="text-[#2A2B39] sm:text-base text-xs font-medium">
                    Average growth in value for limited-edition luxury spirits
                    over the past 5 years.
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2 w-full sm:h-[100px] h-[100px]">
              <Line />
            </div>
          </div>
          <div className="h-[1px] bg-[#D9D9D9]"></div>
          <div className="flex sm:flex-row flex-col sm:gap-20 gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[#A88573] sm:text-lg text-base">
                Liquidity
              </span>
              <span className="text-[#051B1B] sm:text-base text-sm">
                Holders (NFT) can list assets on the secondary market or
                approved partner platforms for trading.
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[#A88573] sm:text-lg text-base">
                Liquidity
              </span>
              <span className="text-[#051B1B] sm:text-base text-sm">
                Holders (NFT) can list assets on the secondary market or
                approved partner platforms for trading.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMarket;
