import Image from "next/image";
import React from "react";
const Opportunities = () => {
  return (
    <div className="flex flex-col gap-7 sm:py-20 py-16 sm:px-0 px-6">
      <div className="container mx-auto flex sm:flex-row flex-col items-start sm:gap-16 gap-12">
        <div className="sm:w-2/5 w-full flex flex-col sm:gap-12 gap-6">
          <div className="sm:text-6xl text-3xl font-light text-[#051B1B]">What makes <br className="sm:block hidden" /><span className="text-[#A88573]">us different</span></div>
          <div className="text-[#2A2B39] sm:text-lg text-base">Unlike traditional collectors, our platform lets you claim assets anytime or store them in secure vaults. Sell easily through our secondary market for profit</div>
        </div>
        <div className="sm:w-3/5 w-full flex flex-col">
          <div className="sm:py-11 sm:px-14 py-5 px-6 flex flex-row sm:gap-14 gap-6 sm:items-center items-start">
            <Image src={'/opportunity1.png'} width={104} height={104} alt="" className="sm:w-[104px] sm:h-[104px] w-12 h-12" />
            <div className="flex flex-col sm:gap-5 gap-3">
              <div className="font-light text-[#051B1B] sm:text-3xl text-lg">Liquid Investments</div>
              <div className="text-[#8C99A2] sm:text-sm text-xs">Our marketplace lets you confidently liquidate investments or diversify your portfolio.</div>
            </div>
          </div>
          <div className="sm:py-11 sm:px-14 py-5 px-6 flex flex-row sm:gap-14 gap-6 sm:items-center items-start">
            <Image src={'/opportunity2.png'} width={104} height={104} alt="" className="sm:w-[104px] sm:h-[104px] w-12 h-12" />
            <div className="flex flex-col sm:gap-5 gap-3">
              <div className="font-light text-[#051B1B] sm:text-3xl text-lg">Hybrid Assets</div>
              <div className="text-[#8C99A2] sm:text-sm text-xs">Our NFTs are not just digital representations—they are tied to real, valuable physical goods</div>
            </div>
          </div>
          <div className="sm:py-11 sm:px-14 py-5 px-6 flex flex-row sm:gap-14 gap-6 sm:items-center items-start">
            <Image src={'/opportunity3.png'} width={104} height={104} alt="" className="sm:w-[104px] sm:h-[104px] w-12 h-12" />
            <div className="flex flex-col sm:gap-5 gap-3">
              <div className="font-light text-[#051B1B] sm:text-3xl text-lg">Exclusive Collaborations</div>
              <div className="text-[#8C99A2] sm:text-sm text-xs">Partnering with top artists and brands ensures each drop is unique and secure.</div>
            </div>
          </div>
          <div className="sm:py-11 sm:px-14 py-5 px-6 flex flex-row sm:gap-14 gap-6 sm:items-center items-start">
            <Image src={'/opportunity4.png'} width={104} height={104} alt="" className="sm:w-[104px] sm:h-[104px] w-12 h-12" />
            <div className="flex flex-col sm:gap-5 gap-3">
              <div className="font-light text-[#051B1B] sm:text-3xl text-lg">Community of Elite Collectors</div>
              <div className="text-[#8C99A2] sm:text-sm text-xs">Network with like-minded individuals and investors who appreciate the fine art of collecting</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
