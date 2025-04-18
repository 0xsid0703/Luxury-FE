"use client"
import React, { useState } from "react";
import SubscribeModal from "../modal/SubscribeModal";
import Image from "next/image";
import CustomButton from "../ui/CustomButton";
const Footer = () => {
  const [isWaitingOpen, setIsWaitingOpen] = useState(false)
  const handleButtonClick = () => {
    setIsWaitingOpen(true)
  };
  return (
    <div className="bg-white py-7 sm:px-0 px-2 ">
      <div className="container mx-auto sm:pt-14 pt-12 sm:px-0 px-4 flex flex-col items-center gap-10 pb-24 bg-center bg-no-repeat bg-cover rounded-[40px]" style={{ backgroundImage: "url(/footerbg.png)" }}>
        <Image src={"/footer1.png"} alt="" width={404} height={209} className="sm:w-[404px] sm:h-[209px] w-[273px] h-[141px]" />
        <div className="flex flex-col gap-8 text-white text-center font-light">
          <div className="sm:text-6xl text-[44px] leading-[45px]">
            Your Invitation to a New Era
            <br /> of <span className="text-blendingYellow"> Luxury Investing
            </span>
          </div>
          <div className="text-lg text-[#828FA7]">
            Join our exclusive community of collectors and investors, where
            <br className="sm:block hidden"/>
            luxury meets rare collectibles and long-term investments
          </div>
        </div>
        <CustomButton text="Register to Waiting List" onClick={handleButtonClick} className="px-6 py-2 w-fit bg-[#FFBC8A] text-lg text-[#0B1934] hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2" />
        {/* <div className="flex flex-col gap-7 items-center z-10">
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
          <div className="border-t border-[#CDCDCD] flex flex-row justify-between pt-8 z-10 bg-[#1F1B16]">
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
          </div> */}
      </div>
      {
        isWaitingOpen && <SubscribeModal onClose={() => setIsWaitingOpen(false)} />
      }
    </div>
  );
};

export default Footer;
