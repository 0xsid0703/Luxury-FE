import Faq from "@/components/pricing/Faq";
import Pricing from "@/components/pricing/Pricing";
import React from "react";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-[#1F1B16]">
      <Pricing />
      <Faq />
    </div>
  );
};

export default PricingPage;
