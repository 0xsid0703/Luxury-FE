import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#E8E8E8]">
      <div className="rounded-t-[50px] bg-[#1F1B16]">
        <div className="container mx-auto pt-44 flex flex-col gap-20 pb-14">
          <div className="flex flex-col gap-12 items-center">
            <div className="flex flex-col gap-8 text-white text-center">
              <div className="text-6xl">
                Your Invitation to a{" "}
                <span className="text-blendingYellow">
                  New Era
                  <br /> of Luxury Investing
                </span>
              </div>
              <div>
                Join our exclusive community of collectors and investors, where
                <br />
                luxury meets rare collectibles and long-term investments
              </div>
            </div>
            <Button className="flex flex-row py-5 px-6 w-fit bg-white rounded-full text-lg border-4 border-[#D49F5E] border-opacity-15 text-black">
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
          <div className="flex flex-col gap-7 items-center">
            <span className="text-[#C1C2C2] text-xl">
              Join community of investors & collectors
            </span>
            <div className="flex flex-row gap-3">
              <Link href={"/"} className="w-10 h-10">
                <Image src={"/telegram.png"} width={40} height={40} alt="" />
              </Link>
              <Link href={"/"} className="w-10 h-10">
                <Image src={"/twitter.png"} width={40} height={40} alt="" />
              </Link>
              <Link href={"/"} className="w-10 h-10">
                <Image src={"/discord.png"} width={40} height={40} alt="" />
              </Link>
            </div>
          </div>
          <div className="border-t border-[#CDCDCD] flex flex-row justify-between pt-8">
            <Link href={"/"} className="text-[#99A1A3] text-base">
              galery111@copyright
            </Link>
            <div className="flex flex-row gap-10">
              <Link href={"/"} className="text-[#99A1A3] text-base">
                Terms of use
              </Link>
              <Link href={"/"} className="text-[#99A1A3] text-base">
                Privacy & Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
