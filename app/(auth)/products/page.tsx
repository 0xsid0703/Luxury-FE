"use client";
import ProductAbout from "@/components/products/ProductAbout";
import ProductArtists from "@/components/products/ProductArtists";
import ProductBrand from "@/components/products/ProductBrand";
import ProductEdition from "@/components/products/ProductEdition";
import ProductFooter from "@/components/products/ProductFooter";
import ProductHero from "@/components/products/ProductHero";
import ProductMarket from "@/components/products/ProductMarket";
import React, { useState } from "react";

const ProductPage = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const loadMailchimpPopup = () => {
    console.log({scriptLoaded})
    if (!scriptLoaded) {
      const script = document.createElement("script");
      script.id = "mcjs";
      script.src =
        "https://chimpstatic.com/mcjs-connected/js/users/9ae7f4c2cd8fb05a3073a6f81/418afc31df317a39db97f2028.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log("Mailchimp popup script loaded.");
        setScriptLoaded(true);
      };
    }
  };
  
  return (
    <div className="min-h-screen">
      <ProductHero loadMailchimpPopup={loadMailchimpPopup} />
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
