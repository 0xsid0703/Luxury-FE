import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
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
    <div className="container mx-auto bg-white flex flex-col gap-24 py-16">
      <div className="flex flex-col">
        <span className="text-black text-6xl">Blending Art, Blockchain,</span>
        <span className="text-blendingYellow text-6xl">
          and Bespoke Service
        </span>
        <span className="text-greyColor text-lg">
          Where art meets blockchain: Our platform lets collectors own, store,
        </span>
        <span className="text-greyColor text-lg">
          and trade exclusive art as NFTs
        </span>
      </div>
      <div className="flex flex-row gap-32 justify-center">
        <Image src={"/blending.png"} width={600} height={550} alt="" />
        <div className="flex flex-col gap-12">
          <ul className="flex flex-col gap-7 list-disc">
            {blendings.map((blending, index) => (
              <div className="flex flex-col" key={index}>
                <li className="text-[22px]">{blending.title}</li>
                <span className="text-greyColor text-base">
                  {blending.desc}
                </span>
              </div>
            ))}
          </ul>
          <Button className="flex flex-row py-5 px-6 w-fit text-blendingButton bg-blendingButton rounded-full text-lg">
            <span>Apply for Access</span>
            <Image
              src="/right-arrow.svg" // Path relative to the public directory
              alt="Right Arrow"
              width={12}
              height={15}
              className="text-[#FFE281]" // Tailwind class (won't work for SVGs unless you use inline SVG)
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blending;
