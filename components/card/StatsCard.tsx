import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type StatsProps = {
  title: string;
  number: number;
  status: string;
};

const StatsCard = ({ title, number, status }: StatsProps) => {
  return (
    <div className="w-full rounded-lg shadow-xl flex flex-col gap-2 bg-white p-5">
      <div className="text-base md:text-xl underline">{title}</div>
      <div className="text-4xl md:text-6xl font-bold text-center flex justify-center">
        {status != "succeeded" ? <Skeleton className="h-14 w-full" /> : number}
      </div>
    </div>
  );
};

export default StatsCard;
