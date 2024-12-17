"use client";
import React, { useEffect } from "react";
import StatsCard from "@/components/card/StatsCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ArtistState } from "@/types/Artist";
import { CardState } from "@/types/Card";
import { UserState } from "@/types/User";
import { LanguageState } from "@/types/Language";
import { ImageState } from "@/types/ImageType";

type Stat = {
  title: string;
  number: number;
  status: string;
};

const Home = () => {
  const artist: ArtistState = useSelector<RootState, ArtistState>(
    (state) => state.artists
  );
  const card: CardState = useSelector<RootState, CardState>(
    (state) => state.cards
  );
  const user: UserState = useSelector<RootState, UserState>(
    (state) => state.users
  );
  const language: LanguageState = useSelector<RootState, LanguageState>(
    (state) => state.languages
  );
  const images: ImageState = useSelector<RootState, ImageState>(
    (state) => state.images
  );
  useEffect(() => {}, [artist, card]);
  const stats: Stat[] = [
    {
      title: "Sessions",
      number: 15,
      status: "succeeded",
    },
  ];
  return (
    <div className="w-full flex p-5 md:p-10 h-screen overflow-auto">
      <div className="container flex flex-col gap-5">
        <div className="text-2xl">Welcome to TT Admin</div>
        <div className="grid grid-cols-2 gap-5 xl:grid-cols-6 sm:grid-cols-3">
          <StatsCard
            title={"Cards"}
            number={card.cards.length || 0}
            status={card.status}
          />
          <StatsCard
            title={"Languages"}
            number={language.languages.length || 0}
            status={language.status}
          />
          <StatsCard
            title={"Artists"}
            number={artist.artists.length || 0}
            status={artist.status}
          />
          <StatsCard
            title={"Users"}
            number={user.users?.length || 0}
            status={user.status}
          />
          <StatsCard
            title={"Uploaded Images"}
            number={images.images?.length || 0}
            status={images.status}
          />

          {stats.map((stat: Stat, index) => (
            <StatsCard {...stat} key={index} />
          ))}
        </div>
        <StatsCard
          title="Ongoing testing feedback stats"
          number={0}
          status="succeeded"
        />
        <div>Most popular Cards and frequently encountered game outcomes</div>
      </div>
    </div>
  );
};

export default Home;
