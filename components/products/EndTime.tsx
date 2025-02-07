"use client"; // Ensure it's a Client Component

import { useState, useEffect } from "react";

const CountdownTimer = ({ enddate }: { enddate: string }) => {
  const [timeLeft, setTimeLeft] = useState<any>(null); // Start as `null` to prevent mismatch

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = new Date(enddate).getTime() - now.getTime();

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft()); // Set initial time on client only

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [enddate]);

  // Prevent server-side rendering issues
  if (!timeLeft) return <p className="text-gray-500">Loading countdown...</p>;

  return (
      <span className="text-[#63151F]">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </span>
  );
};

export default CountdownTimer;
