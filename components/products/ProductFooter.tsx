import Link from "next/link";
import React from "react";

const ProductFooter = () => {
  return (
    <div className="py-8 container mx-auto w-full flex flex-col gap-12 sm:px-0 px-2">
      <div
        className="bg-cover bg-no-repeat bg-center relative rounded-[30px] flex flex-col"
        style={{ backgroundImage: "url(/product/footer.png)" }}
      >
        <div className="absolute top-0 left-0 bg-gradient-to-r from-[#020202] via-black to-transparent h-full w-1/2 z-[1] rounded-[30px]"></div>
        <div className="flex flex-col sm:p-20 px-5 py-10 z-[5] sm:gap-14 gap-10">
          <div className="flex flex-col items-start">
            <span className="font-light sm:text-6xl text-3xl text-white">
              Join the <span className="text-[#F3CF72]">Exclusive</span> {" "}
              Waiting List
            </span>
          </div>
          <div className="flex flex-col sm:gap-10 gap-5 sm:w-1/3 w-full">
            <span className="text-white text-lg">
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
          <div className="flex flex-col gap-4 sm:w-1/3 w-full">
            <Link
              href={"/"}
              className="bg-[#F3CF72] border-4 border-[#D49F5E] border-opacity-50 rounded-full w-fit py-4 px-8 hover:shadow-[0_0_0_0px_black,0_8px_0_0_white] hover:-translate-y-2 transition-all"
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
    </div>
  );
};

export default ProductFooter;
