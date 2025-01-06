"use client";
import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
const Description = () => {
  const [selectedTerm, setSelectedTerm] = useState(0);
  return (
    <div className="bg-[#E8E8E8]">
      <div className="bg-[#1F1B16] rounded-b-[50px]">
        <div className="container mx-auto py-24 flex flex-col gap-24 ">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col items-center">
              <span className="font-normal text-6xl text-white">
                Own and Trade Exclusive
              </span>
              <span className="font-normal text-6xl text-heroYellow">
                Art & Collecibles
              </span>
              <span className="font-normal text-lg text-greyColor mt-8">
                Our platform offers a luxurious, exclusive experience with rare
                art and collectibles
                <br /> from top artists and brands, beyond just investment.
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="w-2/5 bg-white p-10 flex flex-col gap-4 rounded-3xl">
                  <span className="text-3xl">Exclusivity Meets Security</span>
                  <span className="text-base text-descColor">
                    Gain access to exclusive art and collectibles sourced
                    directly from internationally recognized artists and luxury
                    brands.
                  </span>
                </div>
                <div className="w-2/5 bg-[#59443C] p-10 flex flex-col gap-4 rounded-3xl text-white">
                  <span className="text-3xl">Physical & Digital Harmony</span>
                  <span className="text-base text-[#CCCCCC]">
                    Each collectible is authenticated with NFC chips or QR
                    stickers linked to VERISART certificates, ensuring your
                    investment is tangible and verifiable.
                  </span>
                </div>
                <div className="">
                  <Image
                    src={"/desc1.png"}
                    width={240}
                    height={240}
                    className="rounded-3xl"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="w-2/5 bg-[#32302D] p-10 flex flex-col gap-4 rounded-3xl">
                  <span className="text-3xl text-white">
                    Trust Beyond Transactions
                  </span>
                  <span className="text-base text-[#CCCCCC]">
                    Whether for passion or profit, our curated collections
                    guarantee wise investments, backed by authentication and
                    global storage.
                  </span>
                </div>
                <div className="">
                  <Image
                    src={"/desc2.png"}
                    width={240}
                    height={240}
                    className="rounded-3xl"
                    alt=""
                  />
                </div>
                <div className="w-2/5 bg-[#E5CE87] p-10 flex flex-col gap-4 rounded-3xl text-white">
                  <span className="text-3xl">Designed for Elite Investors</span>
                  <span className="text-base text-[#766B46]">
                    Built specifically for accredited investors, our platform
                    offers a private, high-end experience with a global
                    perspective.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex flex-row justify-between items-end">
              <div className="flex flex-col items-start">
                <span className="font-normal text-6xl text-white">
                  Own, Store, or Trade
                </span>
                <span className="font-normal text-6xl text-heroYellow">
                  On Your Terms
                </span>
                <span className="font-normal text-lg text-greyColor">
                  Unlike traditional collectors, our platform lets you claim
                  assets anytime
                  <br /> or store them in secure vaults. Sell easily through our
                  secondary market
                  <br /> for profit
                </span>
              </div>
              <Button className="text-[#1F1B16] bg-white rounded-full py-7 px-9 flex flex-row gap-2 items-center outline outline-4 outline-[#D49F5E]/20 hover:bg-[#F7F5F2] hover:outline-[#D49F5E]/50 hover:shadow-lg transition duration-300 font-semibold text-lg">
                Apply for Access
                <div className="w-[1px] h-5 bg-[#848484]/30"></div>
                <ArrowRight size={20} color="#1F1B16" />
              </Button>

            </div>
            <div className="grid grid-cols-3 gap-3">
              <div
                className="flex flex-col gap-4 cursor-pointer"
                onClick={() => setSelectedTerm(0)}
              >
                <div className="text-xl text-white">{`(01)`}</div>
                <div
                  className={clsx(
                    "h-[1px]",
                    selectedTerm == 0 ? "bg-[#F3CF72]" : "bg-white"
                  )}
                ></div>
                <div className="text-3xl text-white">Claim on your own</div>
                <div
                  className={clsx(
                    "text-lg text-white",
                    selectedTerm == 0 ? "block" : "hidden"
                  )}
                >
                  Your assets are always within reach—whether you want them
                  displayed at home or securely stored
                </div>
              </div>
              <div
                className="flex flex-col gap-4 cursor-pointer"
                onClick={() => setSelectedTerm(1)}
              >
                <div className="text-xl text-white">{`(02)`}</div>
                <div
                  className={clsx(
                    "h-[1px]",
                    selectedTerm == 1 ? "bg-[#F3CF72]" : "bg-white"
                  )}
                ></div>
                <div className="text-3xl text-white">
                  Global Vault Partnerships
                </div>
                <div
                  className={clsx(
                    "text-lg text-white",
                    selectedTerm == 1 ? "block" : "hidden"
                  )}
                >
                  We partner with the most secure vault facilities in Worldwide
                  ultra-vault.com, offering peace of mind for your physical
                  goods.
                </div>
              </div>
              <div
                className="flex flex-col gap-4 cursor-pointer"
                onClick={() => setSelectedTerm(2)}
              >
                <div className="text-xl text-white">{`(03)`}</div>
                <div
                  className={clsx(
                    "h-[1px]",
                    selectedTerm == 2 ? "bg-[#F3CF72]" : "bg-white"
                  )}
                ></div>
                <div className="text-3xl text-white">Trade in Style</div>
                <div
                  className={clsx(
                    "text-lg text-white",
                    selectedTerm == 2 ? "block" : "hidden"
                  )}
                >
                  Our secondary marketplace offers a seamless experience to
                  resell your NFTs, allowing you to capitalize on market demand
                  without leaving our ecosystem
                </div>
              </div>
            </div>
            <Image
              src={"/desc3.png"}
              className={clsx(
                "w-full h-auto rounded-[50px]",
                selectedTerm == 0 ? "block" : "hidden"
              )}
              width={1200}
              height={560}
              alt=""
            />
            <Image
              src={"/desc3.png"}
              className={clsx(
                "w-full h-auto rounded-[50px]",
                selectedTerm == 1 ? "block" : "hidden"
              )}
              width={1200}
              height={560}
              alt=""
            />
            <Image
              src={"/desc3.png"}
              className={clsx(
                "w-full h-auto rounded-[50px]",
                selectedTerm == 2 ? "block" : "hidden"
              )}
              width={1200}
              height={560}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
