"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductArtists = () => {
  const [selectedArtist, setSelectedArtist] = useState(0);
  return (
    <div className="py-14 bg-[#E8E8E8]">
      <div className="container mx-auto flex flex-col gap-16">
        <div className="flex">
          <span className="font-normal text-6xl text-[#9C7C55]">Artists</span>
          <span className="font-normal text-6xl text-black">collaboration</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div
            className={clsx(
              "flex gap-1 border-b cursor-pointer",
              selectedArtist == 0 ? "border-[#9C7C55]" : "border-[#99A1A3]"
            )}
            onClick={() => setSelectedArtist(0)}
          >
            <span
              className={clsx(
                "text-lg",
                selectedArtist == 1 ? "text-[#9C7C55]" : "text-[#99A1A3]"
              )}
            >{`(01)`}</span>
            <span
              className={clsx(
                "text-lg",
                selectedArtist == 1 ? "text-black" : "text-[#99A1A3]"
              )}
            >
              Shane Guffogg
            </span>
          </div>
          <div
            className={clsx(
              "flex gap-1 border-b cursor-pointer",
              selectedArtist == 1 ? "border-[#9C7C55]" : "border-[#99A1A3]"
            )}
            onClick={() => setSelectedArtist(1)}
          >
            <span
              className={clsx(
                "text-lg",
                selectedArtist == 1 ? "text-[#9C7C55]" : "text-[#99A1A3]"
              )}
            >{`(02)`}</span>
            <span
              className={clsx(
                "text-lg",
                selectedArtist == 1 ? "text-black" : "text-[#99A1A3]"
              )}
            >
              John Doe
            </span>
          </div>
        </div>
        {selectedArtist == 0 && (
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-10">
              <div
                className="bg-cover bg-no-repeat bg-center w-full h-[690px] rounded-[24px]"
                style={{ backgroundImage: "url(/artist/man.png)" }}
              ></div>
              <div className="flex flex-row gap-8">
                <Link href={"/"}>
                  <Image
                    src={"/artist/global.png"}
                    width={32}
                    height={32}
                    alt=""
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src={"/artist/instagram.png"}
                    width={32}
                    height={32}
                    alt=""
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src={"/artist/twitter.png"}
                    width={32}
                    height={32}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-[#1F1B16] p-10 flex flex-col gap-6 rounded-[22px]">
                <div className="flex font-semibold gap-2">
                  <span className="font-normal text-2xl text-white">
                    Shane Guffogg:
                  </span>
                  <span className="font-normal text-2xl text-[#9C7C55]">
                    An Artistic Visionary
                  </span>
                </div>
                <div className="text-lg text-white">{`Bufog’s creations span large-scale murals, commissioned paintings, and collaborative works, each with a distinct, vibrant style that blends traditional techniques with modern themes. His work often centers on themes of metamorphosis, energy, and rebirth, drawing inspiration from nature, mythology, and human emotion.`}</div>
                <div className="text-lg text-white">{`Bufog's signature approach—fusing abstract elements with detailed narrative imagery—makes him a sought-after artist for projects that require both aesthetic depth and emotional resonance. His partnership with Cardinal Du Four is a natural extension of his artistic philosophy, blending the world of fine art with that of luxury spirits.`}</div>
              </div>
              <div className="flex flex-row gap-3">
                <div
                  className="w-3/5 aspect-[1/1] rounded-[24px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url(/artist/artist2.png)" }}
                ></div>
                <div
                  className="w-2/5 h-2/3 rounded-[24px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url(/artist/artist1.png)" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductArtists;
