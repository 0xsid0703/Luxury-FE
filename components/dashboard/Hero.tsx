import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const upcomings = [
    {
      image: "/upcoming.png",
      limited_bottles: 500,
      title: "Cardinal Du Four: Craftsmanship, Heritage, and Innovation",
      subtitle: "Rare Armagnac with custom-designed bottle by Robert King",
      description:
        "One of the most prestigious brands in the world of Armagnac, France’s oldest spirit.With a legacy dating back more than 700 years, Cardinal Du Four blends centuries-old craftsmanship with contemporary luxury, making it a leading choice among collectors",
      link: "#",
    },
    {
      image: "/upcoming.png",
      limited_bottles: 500,
      title: "Cardinal Du Four: Craftsmanship, Heritage, and Innovation",
      subtitle: "Rare Armagnac with custom-designed bottle by Robert King",
      description:
        "One of the most prestigious brands in the world of Armagnac, France’s oldest spirit.With a legacy dating back more than 700 years, Cardinal Du Four blends centuries-old craftsmanship with contemporary luxury, making it a leading choice among collectors",
      link: "#",
    },
    {
      image: "/upcoming.png",
      limited_bottles: 500,
      title: "Cardinal Du Four: Craftsmanship, Heritage, and Innovation",
      subtitle: "Rare Armagnac with custom-designed bottle by Robert King",
      description:
        "One of the most prestigious brands in the world of Armagnac, France’s oldest spirit.With a legacy dating back more than 700 years, Cardinal Du Four blends centuries-old craftsmanship with contemporary luxury, making it a leading choice among collectors",
      link: "#",
    },
    {
      image: "/upcoming.png",
      limited_bottles: 500,
      title: "Cardinal Du Four: Craftsmanship, Heritage, and Innovation",
      subtitle: "Rare Armagnac with custom-designed bottle by Robert King",
      description:
        "One of the most prestigious brands in the world of Armagnac, France’s oldest spirit.With a legacy dating back more than 700 years, Cardinal Du Four blends centuries-old craftsmanship with contemporary luxury, making it a leading choice among collectors",
      link: "#",
    },
  ];
  return (
    <div
      className="w-full h-fit bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(/hero.png)" }}
    >
      <div className="flex flex-col pt-36 items-center relative">
        <div className="absolute top-0 bg-gradient-to-b from-[#1F1B16] to-transparent h-1/2 w-full z-0"></div>
        <div className="absolute bg-gradient-to-t from-[#1F1B16] to-transparent h-1/2 w-full z-0 bottom-32"></div>
        <div className="flex flex-col gap-14 items-center w-full z-[5]">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center">
              <span className="font-normal text-6xl text-white">
                Own and Trade Exclusive
              </span>
              <span className="font-normal text-6xl text-heroYellow">
                Art & Collecibles
              </span>
            </div>
            <div className="text-white text-base text-center">
              Join our exclusive community of collectors and investors, where
              luxury
              <br /> meets rare collectibles and long-term investments
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper w-2/3 gap-5"
          >
            {upcomings.map((upcoming, index) => (
              <SwiperSlide key={index}>
                <div
                  className="flex flex-col rounded-xl p-6 divide-y divide-[#A8A8A852] bg-hero-card text-white"
                  key={index}
                >
                  <div className="pb-5 text-2xl leading-6">Upcoming Sales</div>
                  <div className="flex flex-row pt-5">
                    <div className="w-1/3 h-auto relative">
                      <Image
                        src={upcoming.image}
                        className="w-full h-full rounded-xl"
                        width={391}
                        height={321}
                        alt=""
                      />
                      <Image
                        src={"/play.svg"}
                        className="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="w-2/3 flex flex-col gap-3 py-3 px-10">
                      <div className="bg-limitedColor rounded-full text-sm text-white w-fit px-2">
                        Limited to {upcoming.limited_bottles} bottles
                      </div>
                      <div className="text-white font-extrabold text-[32px]">
                        {upcoming.title}
                      </div>
                      <div className="text-white font-normal text-lg">
                        {upcoming.subtitle}
                      </div>
                      <div className="text-greyColor font-normal text-base line-clamp-3">
                        {upcoming.description}
                      </div> 
                      <Link
                        href={upcoming.link}
                        className="text-lg flex flex-row gap-2 text-white items-center"
                      >
                        View Sale Details <ArrowRight size={20} color="#FFF" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Link
            href={"/"}
            className="text-lg font-semibold px-9 py-4 bg-[#FFDF7C] border-4 border-[#D49F5E10] rounded-full w-fit mb-14"
          >
            Get Access to Private Sales
          </Link>
        </div>
        <div className="flex flex-col w-full items-center gap-6 pt-6 pb-16 bg-[#1F1B16] z-[5]">
          <div className="font-medium text-[#B5B7B8] text-sm">
            Proudly Collaborating With:
          </div>
          <div className="flex flex-row justify-between gap-16 px-20">
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
  );
};

export default Hero;
