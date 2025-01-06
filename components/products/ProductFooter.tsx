import Link from "next/link";
import React from "react";

const ProductFooter = () => {
  return (
    <div className="py-8 container mx-auto w-full flex flex-col gap-12">
      <div
        className="bg-cover bg-no-repeat bg-center relative rounded-[30px] flex flex-col"
        style={{ backgroundImage: "url(/product/footer.png)" }}
      >
        <div className="absolute top-0 bg-gradient-to-r from-[#020202] to-transparent h-full w-1/3 z-[1] rounded-[30px]"></div>
        <div className="flex flex-col p-20 z-[5] gap-14">
          <div className="flex flex-col items-start">
            <span className="font-normal text-6xl text-white">
              Join the <span className="text-[#F3CF72]">Exclusive</span>
            </span>
            <span className="font-normal text-6xl text-white">
              Waiting List
            </span>
          </div>
          <div className="flex flex-col gap-10 w-1/3">
            <span className="text-white font-semibold text-lg">
              Be one of the first to own a piece of this historic collaboration
              between <span className="text-[#F3CF72]">Shayne Bufog</span> and{" "}
              <span className="text-[#F3CF72]">Cardinal Du Four</span>.{" "}
            </span>
            <span className="text-white font-semibold text-lg">
              With only 300 bottles available worldwide, this is a rare
              opportunity to secure a masterpiece that blends fine art and
              luxury spirit. Don’t miss out on this exclusive airdrop—an
              investment in heritage, art, and excellence.
            </span>
          </div>
          <div className="flex flex-col gap-4 w-1/3">
            <Link
              href={"/"}
              className="bg-[#F3CF72] border-4 border-[#D49F5E] border-opacity-50 rounded-full w-fit py-4 px-8"
            >
              Join the Wating List Now
            </Link>
            <span className="text-[#C1C2C2]">
              Secure your spot and be among the first to experience this
              exclusive release
            </span>
          </div>
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
  );
};

export default ProductFooter;
