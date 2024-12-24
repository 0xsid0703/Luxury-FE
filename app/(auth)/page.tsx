"use client";
import Blending from "@/components/dashboard/Blending";
import Description from "@/components/dashboard/Description";
import Footer from "@/components/dashboard/Footer";
import Hero from "@/components/dashboard/Hero";
import Opportunities from "@/components/dashboard/Opportunities";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Blending />
      <Description />
      <Opportunities />
      <Footer />
    </div>
  );
};

export default Home;
