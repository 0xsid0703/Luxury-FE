"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

const Description = () => {
  const [selectedTerm, setSelectedTerm] = useState(0);
  return (
    <div className="bg-white flex flex-col gap-16 pt-16">
      <div className="container mx-auto flex flex-col sm:gap-10 gap-6 sm:px-0 px-6">
        <div className="font-light sm:text-6xl text-3xl text-[#2A2B39]">
          Own, store, or trade, <br className="sm:block hidden" />
          <span className="text-[#A88573]">on your terms</span>
        </div>
        <div className="flex sm:flex-row flex-col justify-between sm:gap-0 gap-12 sm:items-center items-start">
          <div className="sm:w-2/5 w-full text-[#2A2B39] font-medium sm:text-xl text-base">Unlike traditional collectors, our platform lets you claim assets anytime or store them in secure vaults. Sell easily through our secondary market for profit</div>
          <div className="w-fit">Apply for Access</div>
        </div>
      </div>
      <div className="w-full relative bg-no-repeat bg-cover bg-center sm:aspect-[1440/528] h-full" style={{ backgroundImage: "url(/description.png)" }}>
        <div className="absolute top-0 left-0 bg-[#151322] h-full z-[1] w-full opacity-60"></div>
        <div className="container mx-auto sm:flex hidden flex-row  h-full gap-6 py-16 ">
          <div className="w-1/3 relative flex flex-col h-full justify-end gap-9 z-[5]">
            <div className="px-12 flex flex-col gap-9">
              <Image src={'/desc01.png'} width={58} height={58} alt="" className="w-14 h-14 cursor-pointer" onClick={() => setSelectedTerm(0)} />
              <div className="sm:text-[53px] font-light text-3xl text-white leading-10">Claim on your own</div>
            </div>
            <div className={clsx("w-full bg-white sm:px-12 sm:py-9 px-5 py-6 flex flex-col sm:gap-9 gap-6 rounded-xl", selectedTerm === 0 ? "visible" : "invisible")}>
              <div className="sm:text-lg text-sm">Your assets are always within reach—whether you want them displayed at home or securely stored</div>
              <div className="sm:text-sm text-xs text-[#A88573] capitalize">REQUEST ACCESS</div>
            </div>
          </div>
          <div className="w-1/3 relative flex flex-col h-full justify-end gap-9 z-[5]">
            <div className={clsx("w-full bg-white sm:px-12 sm:py-9 px-5 py-6 flex flex-col sm:gap-9 gap-6 rounded-xl", selectedTerm === 1 ? "visible" : "invisible")}>
              <div className="sm:text-lg text-sm">Your assets are always within reach—whether you want them displayed at home or securely stored</div>
              <div className="sm:text-sm text-xs text-[#A88573] capitalize">REQUEST ACCESS</div>
            </div>
            <div className="px-12 flex flex-col gap-9">
              <Image src={'/desc02.png'} width={58} height={58} alt="" className="w-14 h-14 cursor-pointer" onClick={() => setSelectedTerm(1)} />
              <div className="sm:text-[53px] font-light text-3xl text-white leading-10">Trade in Style</div>
            </div>
          </div>
          <div className="w-1/3 relative flex flex-col h-full justify-end gap-9 z-[5]">
            <div className={clsx("w-full bg-white sm:px-12 sm:py-9 px-5 py-6 flex flex-col sm:gap-9 gap-6 rounded-xl", selectedTerm === 2 ? "visible" : "invisible")}>
              <div className="sm:text-lg text-sm">Your assets are always within reach—whether you want them displayed at home or securely stored</div>
              <div className="sm:text-sm text-xs text-[#A88573] capitalize">REQUEST ACCESS</div>
            </div>
            <div className="px-12 flex flex-col gap-9">
              <Image src={'/desc03.png'} width={58} height={58} alt="" className="w-14 h-14 cursor-pointer" onClick={() => setSelectedTerm(2)} />
              <div className="sm:text-[53px] font-light text-3xl text-white leading-10">Store in Vault</div>
            </div>
          </div>
        </div>
        <div className="container mx-auto sm:hidden flex flex-col p-6 gap-14">
          <div className="w-full flex flex-col gap-5 z-[5]">
            <div className="flex flex-col gap-5">
              <Image src={'/desc01.png'} width={58} height={58} alt="" className="w-14 h-14 cursor-pointer"/>
              <div className="sm:text-[53px] font-light text-3xl text-white leading-10">Claim on your own</div>
            </div>
            <div className={clsx("w-full bg-white px-5 py-6 flex flex-col gap-6 rounded-xl")}>
              <div className="sm:text-lg text-sm">Your assets are always within reach—whether you want them displayed at home or securely stored</div>
              <div className="sm:text-sm text-xs text-[#A88573] capitalize">REQUEST ACCESS</div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 z-[5]">
            <div className="flex flex-col gap-5">
              <Image src={'/desc02.png'} width={58} height={58} alt="" className="w-14 h-14 cursor-pointer"/>
              <div className="sm:text-[53px] font-light text-3xl text-white leading-10">Trade in Style</div>
            </div>
            <div className={clsx("w-full bg-white px-5 py-6 flex flex-col gap-6 rounded-xl")}>
              <div className="sm:text-lg text-sm">Your assets are always within reach—whether you want them displayed at home or securely stored</div>
              <div className="sm:text-sm text-xs text-[#A88573] capitalize">REQUEST ACCESS</div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 z-[5]">
            <div className="flex flex-col gap-5">
              <Image src={'/desc03.png'} width={58} height={58} alt="" className="w-14 h-14 cursor-pointer"/>
              <div className="sm:text-[53px] font-light text-3xl text-white leading-10">Store in Vault</div>
            </div>
            <div className={clsx("w-full bg-white px-5 py-6 flex flex-col gap-6 rounded-xl")}>
              <div className="sm:text-lg text-sm">Your assets are always within reach—whether you want them displayed at home or securely stored</div>
              <div className="sm:text-sm text-xs text-[#A88573] capitalize">REQUEST ACCESS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
