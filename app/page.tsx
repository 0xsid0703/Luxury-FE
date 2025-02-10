import React from "react";
import Blending from "@/components/dashboard/Blending";
import Description from "@/components/dashboard/Description";
import Footer from "@/components/dashboard/Footer";
import Hero from "@/components/dashboard/Hero";
import Opportunities from "@/components/dashboard/Opportunities";
import { getCurrentUser } from "@/lib/auth";
import { trpc } from "@/trpc/server";
import { getCollections } from "@/lib/shopify";
import CommonFooter from "@/components/common/CommonFooter";

const Home = async () => {
  const user = await getCurrentUser();
  const collections = await getCollections();

  console.log({user})
  if (user && user.id) {
    const customer = await trpc.customer.queryCustomer.query({
      userId: user.id,
    });
    if (!customer) {
      console.log("inserting customer");
      await trpc.customer.insertCustomer.mutate({
        userId: user.id,
      });
    }
  }
  // const accout
  return (
    <div className="min-h-screen relative">
      <Hero collections={collections}/>
      <Blending />
      <Description />
      <Opportunities />
      <Footer />
      <CommonFooter />
    </div>
  );
};

export default Home;
