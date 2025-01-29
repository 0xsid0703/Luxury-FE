"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const ProductAbout = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current;
      if (element) {
        const diff = element.scrollHeight - element.scrollTop;
        const max_diff = element.scrollHeight - element.clientHeight;
        const isBottom = diff === element.clientHeight;
        console.log({max_diff}, "Seleted: ", element.scrollTop)
        if(max_diff/3 >= element.scrollTop){
          setSelectedImage(0)
        }else if(max_diff/3*2 >= element.scrollTop){
          setSelectedImage(1)
        }else{
          setSelectedImage(2)
        }
        setIsAtBottom(isBottom);
      }
    };

    const element = scrollRef.current;
    element?.addEventListener("scroll", handleScroll);

    return () => {
      element?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    console.log({selectedImage})
  }, [selectedImage])
  return (
    <div className="bg-white sm:py-20 py-16 sm:px-0 px-6">
      <div className="container mx-auto flex flex-col gap-12">
        <div className="sm:text-6xl text-3xl text-center"><span className="text-[#A88573]">The Art</span> {" "} of Fine Spirits</div>
        <div className="flex-row gap-24 hidden sm:flex">
          {selectedImage === 0 && <div
            className="bg-center bg-no-repeat bg-cover w-[526px] h-[526px] rounded-[40px]"
            style={{ backgroundImage: "url(/product/about1.png)" }}
          ></div>}
          {selectedImage === 1 && <div
            className="bg-center bg-no-repeat bg-cover w-[526px] h-[526px] rounded-[40px]"
            style={{ backgroundImage: "url(/product/about2.png)" }}
          ></div>}
          {selectedImage === 2 && <div
            className="bg-center bg-no-repeat bg-cover w-[526px] h-[526px] rounded-[40px]"
            style={{ backgroundImage: "url(/product/about3.png)" }}
          ></div>}
          <div className="w-1/2 h-[526px] relative">
            <div className={`absolute bottom-0 bg-gradient-to-t from-[#E8E8E8] to-transparent h-48 w-full z-[5] ${isAtBottom ? "opacity-0" : "opacity-100"}`}></div>
            <div className="h-full overflow-auto flex flex-col gap-12 about-scrollbar" ref={scrollRef}>
              <div className="flex flex-col gap-6 z-0">
                <div className="text-[#051D1D] text-3xl font-semibold">
                  Global Flexibility & Security
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-base text-#051D1D]">
                    {`Cardinal Du Four is not only recognized for its craftsmanship
                but also for its investment potential. The combination of
                Bufog’s artwork and the award-winning Armagnac ensures this
                release is an excellent addition to any investment portfolio.`}
                  </span>
                  <span className="text-base text-#051D1D]">
                    {`Bufog’s designs for the bottles elevate them beyond traditional
                luxury spirits, transforming them into long-term assets that can
                be traded, collected, or displayed as fine art. Each bottle
                comes with VERISART digital certification, providing proof of
                authenticity and ownership.`}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-6 z-0">
                <div className="text-[#051D1D] text-3xl font-semibold">
                  Global Flexibility & Security
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-base text-#051D1D]">
                    {`Cardinal Du Four is not only recognized for its craftsmanship
                but also for its investment potential. The combination of
                Bufog’s artwork and the award-winning Armagnac ensures this
                release is an excellent addition to any investment portfolio.`}
                  </span>
                  <span className="text-base text-#051D1D]">
                    {`Bufog’s designs for the bottles elevate them beyond traditional
                luxury spirits, transforming them into long-term assets that can
                be traded, collected, or displayed as fine art. Each bottle
                comes with VERISART digital certification, providing proof of
                authenticity and ownership.`}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-6 z-0">
                <div className="text-[#051D1D] text-3xl font-semibold">
                  Global Flexibility & Security
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-base text-#051D1D]">
                    {`Cardinal Du Four is not only recognized for its craftsmanship
                but also for its investment potential. The combination of
                Bufog’s artwork and the award-winning Armagnac ensures this
                release is an excellent addition to any investment portfolio.`}
                  </span>
                  <span className="text-base text-#051D1D]">
                    {`Bufog’s designs for the bottles elevate them beyond traditional
                luxury spirits, transforming them into long-term assets that can
                be traded, collected, or displayed as fine art. Each bottle
                comes with VERISART digital certification, providing proof of
                authenticity and ownership.`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden block w-full">
          <Swiper
            spaceBetween={30}
            modules={[Navigation]}
            className="mySwiper w-full gap-5 text-[#051D1D]"
          >
            <SwiperSlide key={0}>
              <div className="flex flex-col gap-8">
                <Image src={'/product/about1.png'} width={294} height={294} alt="" className="w-full h-auto" />
                <div className="flex flex-col gap-3">
                  <div className="text-lg">Global Flexibility & Security</div>
                  <div className="flex flex-col gap-2 text-sm">
                    <span>{`Cardinal Du Four is not only recognized for its craftsmanship but also for its investment potential. The combination of Bufog’s artwork and the award-winning Armagnac ensures this release is an excellent addition to any investment portfolio.`}</span>
                    <span>{`Bufog's designs for the bottles elevate them beyond traditional luxury spirits, transforming them into long-term assets that can be traded, collected, or displayed as fine art. Each bottle comes with VERISART digital certification, providing proof of authenticity and ownership.`}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key={1}>
              <div className="flex flex-col gap-8">
                <Image src={'/product/about2.png'} width={294} height={294} alt="" className="w-full h-auto" />
                <div className="flex flex-col gap-3">
                  <div className="text-lg">Global Flexibility & Security</div>
                  <div className="flex flex-col gap-2 text-sm">
                    <span>{`Cardinal Du Four offers collectors the flexibility of storing their rare bottles in secure vaults across 40 countries ( ultra-vault.com ), ensuring peace of mind for investors worldwide. Whether claimed immediately or stored for future appreciation, every bottle is protected, authenticated, and fully traceable through holographic QR stickers`}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key={2}>
              <div className="flex flex-col gap-8">
                <Image src={'/product/about3.png'} width={294} height={294} alt="" className="w-full h-auto" />
                <div className="flex flex-col gap-3">
                  <div className="text-lg">Global Flexibility & Security</div>
                  <div className="flex flex-col gap-2 text-sm">
                    <span>{`This collaboration signals a new era in the world of luxury collectibles, where art, spirit, and investment converge. By owning one of these rare bottles, collectors are not only securing a piece of French history but also acquiring a work of art that will appreciate in value over time. The Shayne Bufog and Cardinal Du Four collaboration redefines what it means to invest in luxury, offering a truly multi-dimensional asset that blends aesthetic beauty, heritage, and financial potential.`}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div >
  );
};

export default ProductAbout;
