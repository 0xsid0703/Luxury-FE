import React from "react";
import Blending from "@/components/dashboard/Blending";
import Description from "@/components/dashboard/Description";
import Footer from "@/components/dashboard/Footer";
import Hero from "@/components/dashboard/Hero";
import Opportunities from "@/components/dashboard/Opportunities";
import { getCurrentUser } from "@/lib/auth";
import { trpc } from "@/trpc/server";

const Home = async () => {
  const user = await getCurrentUser();
  if (user) {
    const customer = await trpc.customer.queryCustomer.query({
      userId: user.id,
    });
    if (!customer) {
      await trpc.customer.insertCustomer.mutate({
        userId: user.id,
      });
    }
  }
  // const accout
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
