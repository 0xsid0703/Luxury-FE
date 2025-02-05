"use client"
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from 'swiper';
import Image from "next/image";
import VideoModal from "../modal/VideoModal";
import SubscribeModal from "../modal/SubscribeModal";
import Link from "next/link";
import CustomButton from "../ui/CustomButton";

type HeroProps = {
  collections: any[]
}

const Hero = ({ collections }: HeroProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [video, setVideo] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isWaitingOpen, setIsWaitingOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<number>(1);
  const handleButtonClick = () => {
    setIsWaitingOpen(true)
  };
  const handlePrev = () => {
    if (swiper && selectedCollection > 1) {
      setSelectedCollection(selectedCollection - 1)
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper && selectedCollection < collections.length) {
      setSelectedCollection(selectedCollection + 1)
      swiper.slideNext();
    }
  };
  useEffect(() => {
    console.log({ video })
  }, [video])

  return (
    <div
      className="w-full"
    >
      <div className="flex flex-col bg-white min-h-screen">
        <div className="flex-col sm:pt-36 pt-20 w-full  relative h-fit  bg-white">
          <div className="absolute top-0 w-full bg-[#0B1934] z-[2] sm:h-[628px] h-[763px]"></div>
          <div className="absolute top-0 w-full bg-center bg-no-repeat bg-cover sm:h-[628px] h-[763px] z-[3]" style={{ backgroundImage: "url(/hero.png)" }}></div>
          <div className="flex flex-col sm:px-0 px-6 h-fit">
            <div className="container mx-auto flex sm:flex-row sm:justify-between flex-col sm:gap-20 gap-12 w-full z-[5]">
              <div className="flex flex-col items-start sm:gap-12 gap-8 sm:w-2/5 w-full">
                <div className="font-normal sm:text-6xl text-[44px] text-white leading-[44px]">
                  Own and Trade Exclusive {' '}
                  <span className="font-normal sm:text-6xl text-[44px] text-heroYellow">
                    Art & Collecibles
                  </span>
                </div>
                <div className="flex flex-col sm:gap-7 gap-6">
                  <div className="text-white text-base">
                    Join our exclusive community of collectors and investors, where
                    luxury meets rare collectibles and long-term investments
                  </div>
                  <CustomButton text="Register to Waiting List" onClick={handleButtonClick} className="text-lg bg-[#FFDF7C] w-fit hover:shadow-[0_0_0_0px_black,0_8px_0_0_white] hover:-translate-y-2 px-6 py-2"/>
                </div>
              </div>
              <div className="sm:w-2/5 w-full">
                <Swiper
                  spaceBetween={30}
                  onSwiper={setSwiper}
                  modules={[Navigation]}
                  className="mySwiper w-full gap-5"
                >
                  {collections.map((collection, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="flex flex-col rounded-3xl sm:p-5 p-3 bg-white text-[#0B1934]"
                        key={index}
                      >
                        <div className="flex flex-col sm:gap-14 gap-6 sm:p-5 p-3">
                          <div className="flex flex-col sm:gap-6 gap-3">
                            <div className="sm:text-sm text-xs text-[#CF997D] capitalize">Upcoming Sales</div>
                            <div className="sm:text-3xl text-x l font-semibold">{collection.title} : <span className="font-normal ">{collection.metafields.find((metafield: any) => metafield.key === "sale_name")?.value}</span></div>
                          </div>
                          <div className="flex flex-row justify-between">
                            <Link className="rounded-full bg-[#DDE2EA] sm:px-5 sm:py-4 p-3 capitalize text-xs" href={`/products/${collection.handle}`}>VIEW DETAILS</Link>
                            <div className="flex flex-row gap-5 items-center">
                              <div className="text-[#8C99A1] font-medium text-xs ">{selectedCollection} / {collections.length}</div>
                              <div className="flex flex-row gap-2">
                                <button className="sm:w-10 sm:h-10 w-9 h-9 flex flex-row items-center justify-center bg-transparent" onClick={handlePrev}>
                                  <Image
                                    src={"/left.png"}
                                    width={42}
                                    height={42}
                                    alt=""
                                    className="sm:w-10 sm:h-10 w-9 h-9"
                                  />
                                </button>
                                <button className="sm:w-10 sm:h-10 w-9 h-9 flex items-center justify-center bg-transparent" onClick={handleNext}>
                                  <Image
                                    src={"/right.png"}
                                    width={42}
                                    height={42}
                                    alt=""
                                    className="sm:w-10 sm:h-10 w-9 h-9"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full rounded-md relative">
                          <Image
                            src={collection.image.url}
                            width={560}
                            height={315}
                            alt={collection.image.altText}
                            className="rounded-md w-full h-full aspect-[560/315] object-cover"
                          />
                          <Image
                            src={"/play.png"}
                            className="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                            width={50}
                            height={50}
                            onClick={() => {
                              setVideo(JSON.parse(collection.metafields.find((metafield: any) => metafield.key === "video")?.value).url)
                              setIsOpen(true)
                            }}
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="container mx-auto flex flex-col w-full gap-6 pt-16 pb-16 bg-white">
              <div className="font-medium text-[#0F1113] sm:text-2xl text-base">
                Proudly Collaborating With:
              </div>
              <div className="w-full h-fit relative">
                <div className="absolute top-0 left-0 sm:w-20 w-10 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-0 sm:w-20 w-10 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
                <div className="flex-row justify-stretch gap-20 w-full flex overflow-auto about-scrollbar">
                  <Image
                    src={"/WineEnthusiast.svg"}
                    alt=""
                    width={170}
                    height={26}
                    className="w-40 h-6"
                  />
                  <Image
                    src={"/Decanter.svg"}
                    alt=""
                    width={170}
                    height={26}
                    className="w-40 h-6"
                  />
                  <Image
                    src={"/FinancialTimes.svg"}
                    alt=""
                    width={170}
                    height={26}
                    className="w-40 h-6"
                  />
                  <Image
                    src={"/TheNewYorkTimes.svg"}
                    alt=""
                    width={170}
                    height={26}
                    className="w-40 h-6"
                  />
                  <Image
                    src={"/RobbReport.svg"}
                    alt=""
                    width={170}
                    height={26}
                    className="w-40 h-6"
                  />
                  <Image
                    src={"/Bloomberg.svg"}
                    alt=""
                    width={170}
                    height={26}
                    className="w-40 h-6"
                  />
                  <Image
                    src={"/Forbes.svg"}
                    alt=""
                    width={170}
                    height={26}
                    className="w-40 h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full sm:hidden flex relative bg-[#0B1934] h-[763px]">
          <div className="absolute top-0 w-full bg-center bg-no-repeat bg-cover h-[763px]" style={{ backgroundImage: "url(/hero.png)" }}></div>

        </div> */}
      </div>
      {
        isOpen && (
          <VideoModal video={video} onClose={() => setIsOpen(false)} />
        )
      }
      {
        isWaitingOpen && <SubscribeModal onClose={() => setIsWaitingOpen(false)} />
      }
    </div>
  );
};

export default Hero;
