"use client";
import ProductAbout from "@/components/products/ProductAbout";
import ProductArtists from "@/components/products/ProductArtists";
import ProductBrand from "@/components/products/ProductBrand";
import ProductEdition from "@/components/products/ProductEdition";
import ProductFooter from "@/components/products/ProductFooter";
import ProductHero from "@/components/products/ProductHero";
import ProductMarket from "@/components/products/ProductMarket";
import React, { useEffect, useState } from "react";
import { loadMailchimpPopup, resetMailchimpPopup } from "@/utils/mailchimp";

const ProductPage = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Set scriptLoaded to true once the script is loaded
  useEffect(() => {
    const checkMailchimpScript = () => {
      if (window._mailchimpLoaded) {
        setScriptLoaded(true);
      }
    };
    checkMailchimpScript();
  }, []);
  const handleButtonClick = () => {
    if (scriptLoaded) {
      console.log("Button clicked!");
      resetMailchimpPopup();
      loadMailchimpPopup(); // Manually trigger the popup when the button is clicked
    } else {
      console.log("Mailchimp script is not loaded yet.");
    }
  };

  return (
    <div className="min-h-screen">
      <ProductHero loadMailchimpPopup={handleButtonClick} />
      <ProductEdition />
      <ProductBrand />
      <ProductAbout />
      <ProductArtists />
      <ProductMarket />
      <ProductFooter />
    </div>
  );
};

export default ProductPage;
