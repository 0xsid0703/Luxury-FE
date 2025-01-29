"use client"
import React from "react";
import Image from "next/image";
const Blending = () => {

  const blendings = [
    {
      title: "Seamless Ownership",
      desc: "Own unique physical art and luxury collectibles, secured as NFTs for easy transfer and safety.",
    },
    {
      title: "Collaborations with Icons",
      desc: "Our collections showcase exclusive works from top artists and brands, offering unique value and significance.",
    },
    {
      title: "Physical-Digital Link",
      desc: "Our collections showcase exclusive works from top artists and brands, offering unique value and significance.",
    },
    {
      title: "Flexible Control",
      desc: "Claim your asset anytime or store it in secure vaults. Trade effortlessly on our marketplace or with trusted partners.",
    },
    {
      title: "Simple and Secure",
      desc: "Enjoy a Web2 experience powered by blockchain, making it easy for anyone to start.",
    },
  ];
  return (
    <div className="container mx-auto bg-white flex flex-col py-16 sm:px-0 px-6">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <span className="text-black sm:text-6xl text-3xl font-light">Blending Art, Blockchain,</span>
          <span className="text-blendingYellow sm:text-6xl text-3xl font-light">
            and Bespoke Service
          </span>
        </div> 
        <div className="flex flex-col text-[#2A2B39] sm:text-xl text-base sm:w-1/3 w-full">
          Where art meets blockchain: Our platform lets collectors own, store,
          and trade exclusive art as NFTs
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center">
        <div className="sm:pt-[75px] flex flex-row sm:gap-5 gap-3 sm:w-1/2 w-full">
          <div className="sm:w-1/3 w-2/5 bg-[#740C26] aspect-[1/1] h-fit rounded-xl">
            <Image src={"/blending1.png"} width={220} height={220} alt="" className="rounded-xl w-full h-full"/>
          </div>
          <div className="sm:w-2/3 w-3/5 bg-no-repeat bg-cover bg-center rounded-xl mt-[75px] aspect-[1/1] sm:aspect-[480/620]" style={{ backgroundImage: `url(/blending2.png)`}}></div>
        </div>
        <div className="flex flex-col gap-10 sm:p-[75px] sm:w-1/2 w-full p-8">
          {blendings.map((blending, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <span className="sm:text-lg text-base">{blending.title}</span>
              <span className="text-greyColor text-sm">
                {blending.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blending;
