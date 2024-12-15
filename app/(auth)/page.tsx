"use client";
import React, { useEffect } from "react";
import StatsCard from "@/components/card/StatsCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ArtistState } from "@/types/Artist";
import { CardState } from "@/types/Card";
import { UserState } from "@/types/User";
import { LanguageState } from "@/types/Language";

type Stat = {
  title: string;
  number: number;
  status: string;
};

const Home = () => {
  const artist: ArtistState = useSelector<RootState, ArtistState>(
    (state) => state.artist
  );
  const card: CardState = useSelector<RootState, CardState>(
    (state) => state.card
  );
  const user: UserState = useSelector<RootState, UserState>(
    (state) => state.user
  );
  const language: LanguageState = useSelector<RootState, LanguageState>(
    (state) => state.language
  );
  useEffect(() => {}, [artist, card]);
  const stats: Stat[] = [
    {
      title: "Uploaded Images",
      number: 15,
      status: "succeeded",
    },
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
            number={card.card.length || 0}
            status={card.status}
          />
          <StatsCard
            title={"Languages"}
            number={language.language.length || 0}
            status={language.status}
          />
          <StatsCard
            title={"Artists"}
            number={artist.artist.length || 0}
            status={artist.status}
          />
          <StatsCard
            title={"Users"}
            number={user.user?.length || 0}
            status={user.status}
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
