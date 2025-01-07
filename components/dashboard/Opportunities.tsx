import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
const Opportunities = () => {
  return (
    <div className="flex flex-col gap-7 py-20 bg-[#E8E8E8]">
      <div className="container mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col items-center text-center">
          <span className="font-normal text-6xl">
            Exclusive Opportunities,{" "}
          </span>
          <span className="font-normal text-6xl text-[#9C7C55]">
            Tailored For You
          </span>
          <span className="font-normal text-lg text-mainGreyColor mt-8">
            We value your time and investments. Our platform offers a<br />{" "}
            curated selection of rare art and luxury goods, ensuring top
            <br /> craftsmanship and investment potential.
          </span>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-20 flex flex-col gap-10">
            <div className="bg-white rounded-3xl flex flex-col gap-2 p-5 text-center">
              <span className="text-2xl">Handpicked Collections</span>
              <span className="text-mainGreyColor">
                Curated collections from renowned artists and brands ensure
                artistic and financial value
              </span>
            </div>
            <div className="bg-white rounded-3xl flex flex-col gap-2 p-5 text-center">
              <span className="text-2xl">Liquid Investments</span>
              <span className="text-mainGreyColor">
                Our marketplace lets you confidently liquidate investments or
                diversify your portfolio.
              </span>
            </div>
          </div>
          <div className="px-8">
            <Image
              src={"/art.png"}
              width={300}
              height={400}
              className="w-full h-full rounded-xl"
              alt=""
            />
          </div>
          <div className="py-20 flex flex-col gap-10">
            <div className="bg-white rounded-3xl flex flex-col gap-2 p-5 text-center">
              <span className="text-2xl">Effortless Payments</span>
              <span className="text-mainGreyColor">
                Pay by credit card or cryptocurrency, whichever fits your needs
              </span>
            </div>
            <div className="bg-white rounded-3xl flex flex-col gap-2 p-5 text-center">
              <span className="text-2xl">Liquid Investments</span>
              <span className="text-mainGreyColor">
                Our marketplace lets you confidently liquidate investments or
                diversify your portfolio.
              </span>
            </div>
          </div>
        </div>
        <Button className="flex flex-row py-7 px-9 w-fit text-[#FFE281] bg-[#1F1B16] rounded-full text-lg outline outline-4 outline-[#848484]/20 hover:bg-[#2B2720] hover:outline-[#FFE281]/50 hover:shadow-md transition duration-300">
          <span>Become an Investor Now</span>
          <div className="w-[1px] h-6 bg-[#848484]/20"></div>
          <ArrowRight size={12} color="#FFE281" />
        </Button>

        <div className="flex flex-col items-center text-center">
          <span className="font-normal text-6xl">What makes Us different?</span>
          <span className="font-normal text-lg text-mainGreyColor mt-8">
            Unlike other platforms, we combine tangible art and luxury
            collectibles
            <br /> with blockchain-authenticated NFTs, creating a new investment
            <br /> category that merges physical assets with NFT flexibility.
          </span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-col py-8 px-5 rounded-3xl bg-white">
            <div className=""></div>
            <div className="flex flex-col gap-2 text-center items-center">
              <Image src={"/wallet-add.png"} width={40} height={40} alt="" />
              <div className="text-2xl">
                Liquid
                <br /> Investments
              </div>
              <div className="text-base text-mainGreyColor">
                Our marketplace lets you confidently
                <br /> liquidate investments or diversify
                <br /> your portfolio.
              </div>
            </div>
          </div>
          <div className="flex flex-col py-8 px-5 rounded-3xl bg-white">
            <div className=""></div>
            <div className="flex flex-col gap-2 text-center items-center">
              <Image src={"/frame.png"} width={40} height={40} alt="" />
              <div className="text-2xl">
                Hybrid
                <br /> Assets
              </div>
              <div className="text-base text-mainGreyColor">
                Our NFTs are not just digital
                <br /> representations—they are tied to
                <br />
                real, valuable physical goods
              </div>
            </div>
          </div>
          <div className="flex flex-col py-8 px-5 rounded-3xl bg-white">
            <div className=""></div>
            <div className="flex flex-col gap-2 text-center items-center">
              <Image src={"/shield-tick.png"} width={40} height={40} alt="" />
              <div className="text-2xl">
                Exclusive <br /> Collaborations
              </div>
              <div className="text-base text-mainGreyColor">
                Partnering with top artists and
                <br /> brands ensures each drop is
                <br />
                unique and secure.
              </div>
            </div>
          </div>
          <div className="flex flex-col py-8 px-5 rounded-3xl bg-white">
            <div className=""></div>
            <div className="flex flex-col gap-2 text-center items-center">
              <Image src={"/people.png"} width={40} height={40} alt="" />
              <div className="text-2xl">
                Community of Elite
                <br /> Collectors
              </div>
              <div className="text-base text-mainGreyColor">
                Network with like-minded individuals
                <br /> and investors who appreciate the
                <br /> fine art of collecting
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
