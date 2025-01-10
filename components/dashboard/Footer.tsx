import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const Footer = () => {
  return (
    <div className="bg-[#E8E8E8]">
      <div className="rounded-t-[50px] bg-[#1F1B16] relative">
        <div className="absolute top-0 px-12 w-full h-full justify-center z-[1]">
          <div className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url(/footerbg.png)" }}>
          </div>
        </div>
        <div className="container mx-auto pt-44 flex flex-col gap-20 pb-14 z-[5]">
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
            <Button className="flex flex-row py-7 px-9 w-fit bg-white rounded-full text-lg outline outline-4 outline-[#D49F5E]/20 text-black hover:bg-[#F7F5F2]  hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all">
              <span>Apply for Access</span>
              <div className="w-[1px] h-6 bg-[#848484]/20"></div>
              <ArrowRight size={12} color="#000" />
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
              GO FUND ART @copyright
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
