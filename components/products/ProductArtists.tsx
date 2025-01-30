"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductArtists = () => {
  const [selectedArtist, setSelectedArtist] = useState(0);
  return (
    <div className="py-14 bg-white">
      <div className="container mx-auto flex flex-col gap-16 sm:px-0 px-6">
        <div className="flex flex-row gap-2 sm:text-6xl text-3xl">
          <span className="font-light text-[#A88573]">Artists</span>
          <span className="font-light text-black">collaboration</span>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="flex gap-3 overflow-x-auto">
            <div
              className={clsx(
                "flex gap-2 border-b cursor-pointer sm:text-3xl text-lg pb-4 max-w-none sm:w-1/2 ",
                selectedArtist == 0 ? "border-[#A88573]" : "border-[#99A1A3]"
              )}
              onClick={() => setSelectedArtist(0)}
            >
              <span
                className={clsx(
                  "italic",
                  selectedArtist == 0 ? "text-[#A88573] opacity-100" : "text-[#A88573] opacity-50"
                )}
              >{`(01)`}</span>
              <span
                className={clsx(
                  "whitespace-nowrap",
                  selectedArtist == 0 ? "text-black" : "text-[#A88573] opacity-50"
                )}
              >
                Shane Guffogg Dicco Arantes
              </span>
            </div>
            <div
              className={clsx(
                "flex gap-2 border-b cursor-pointer sm:text-3xl text-lg pb-4 max-w-none  sm:w-1/2",
                selectedArtist == 1 ? "border-[#A88573]" : "border-[#99A1A3]"
              )}
              onClick={() => setSelectedArtist(1)}
            >
              <span
                className={clsx(
                  "italic",
                  selectedArtist == 1 ? "text-[#A88573] opacity-100" : "text-[#A88573] opacity-50"
                )}
              >{`(02)`}</span>
              <span
                className={clsx(
                  "whitespace-nowrap",
                  selectedArtist == 1 ? "text-black" : "text-[#A88573] opacity-50"
                )}
              >
                John Doe
              </span>
            </div>
          </div>
          {selectedArtist == 0 && (
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-28 gap-10 bg-[#F3F4F6] sm:p-[60px] p-5 rounded-lg">
              <div className="flex flex-col sm:gap-10 gap-3">
                <div className="sm:text-3xl text-2xl flex flex-col">
                  <span className="text-[#0B1934]">Shane Guffogg:</span>
                  <span className="text-[#A88573]">An Artistic Visionary</span>
                </div>
                <div className="flex flex-col gap-5 text-[#1F2428]">
                  <div className="sm:text-base text-sm">{`Bufog’s creations span large-scale murals, commissioned paintings, and collaborative works, each with a distinct, vibrant style that blends traditional techniques with modern themes. His work often centers on themes of metamorphosis, energy, and rebirth, drawing inspiration from nature, mythology, and human emotion.`}</div>
                  <div className="sm:text-base text-sm">{`Bufog's signature approach—fusing abstract elements with detailed narrative imagery—makes him a sought-after artist for projects that require both aesthetic depth and emotional resonance. His partnership with Cardinal Du Four is a natural extension of his artistic philosophy, blending the world of fine art with that of luxury spirits.`}</div>
                </div>
                <div className="flex flex-row gap-3">
                  <Link href={"/"}>
                    <Image
                      src={"/artist/global.png"}
                      width={18}
                      height={18}
                      alt=""
                    />
                  </Link>
                  <Link href={"/"}>
                    <Image
                      src={"/artist/instagram.png"}
                      width={18}
                      height={18}
                      alt=""
                    />
                  </Link>
                  <Link href={"/"}>
                    <Image
                      src={"/artist/twitter.png"}
                      width={18}
                      height={18}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col gap-3">
                <div
                  className="bg-cover bg-no-repeat bg-center w-full h-[480px] rounded-[24px]"
                  style={{ backgroundImage: "url(/artist/man.png)" }}
                ></div>
                <div className="flex sm:flex-col flex-row gap-3">
                  <div
                    className="sm:w-full w-1/2 sm:h-2/5 h-fit aspect-[1/1] rounded-[24px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(/artist/artist2.png)" }}
                  ></div>
                  <div
                    className="sm:w-full w-1/2 sm:h-3/5 h-[240px] rounded-[24px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(/artist/artist1.png)" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          {selectedArtist == 1 && (
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-28 gap-10 bg-[#F3F4F6] sm:p-[60px] p-5 rounded-lg">
              <div className="flex flex-col sm:gap-10 gap-3">
                <div className="sm:text-3xl text-2xl flex flex-col">
                  <span className="text-[#0B1934]">John Doe:</span>
                  <span className="text-[#A88573]">An Artistic Visionary</span>
                </div>
                <div className="flex flex-col gap-5 text-[#1F2428]">
                  <div className="sm:text-base text-sm">{`Bufog’s creations span large-scale murals, commissioned paintings, and collaborative works, each with a distinct, vibrant style that blends traditional techniques with modern themes. His work often centers on themes of metamorphosis, energy, and rebirth, drawing inspiration from nature, mythology, and human emotion.`}</div>
                  <div className="sm:text-base text-sm">{`Bufog's signature approach—fusing abstract elements with detailed narrative imagery—makes him a sought-after artist for projects that require both aesthetic depth and emotional resonance. His partnership with Cardinal Du Four is a natural extension of his artistic philosophy, blending the world of fine art with that of luxury spirits.`}</div>
                </div>
                <div className="flex flex-row gap-3">
                  <Link href={"/"}>
                    <Image
                      src={"/artist/global.png"}
                      width={18}
                      height={18}
                      alt=""
                    />
                  </Link>
                  <Link href={"/"}>
                    <Image
                      src={"/artist/instagram.png"}
                      width={18}
                      height={18}
                      alt=""
                    />
                  </Link>
                  <Link href={"/"}>
                    <Image
                      src={"/artist/twitter.png"}
                      width={18}
                      height={18}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col gap-3">
                <div
                  className="bg-cover bg-no-repeat bg-center w-full h-[480px] rounded-[24px]"
                  style={{ backgroundImage: "url(/artist/man.png)" }}
                ></div>
                <div className="flex sm:flex-col flex-row gap-3">
                  <div
                    className="sm:w-full w-1/2 sm:h-2/5 h-fit aspect-[1/1] rounded-[24px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(/artist/artist2.png)" }}
                  ></div>
                  <div
                    className="sm:w-full w-1/2 sm:h-3/5 h-[240px] rounded-[24px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(/artist/artist1.png)" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductArtists;
