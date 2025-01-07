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

  // Function to load the Mailchimp popup script
  const loadMailchimpPopup = () => {
    console.log("Button clicked! Trying to load script...");
    
    if (!scriptLoaded) {
      const script = document.createElement("script");
      script.id = "mcjs";
      script.src =
        "https://chimpstatic.com/mcjs-connected/js/users/9ae7f4c2cd8fb05a3073a6f81/418afc31df317a39db97f2028.js";
      script.async = true;

      console.log("Appending script to body...");
      document.body.appendChild(script);
      
      script.onload = () => {
        console.log("Mailchimp popup script loaded.");
        setScriptLoaded(true);
        
        // Check for the Mailchimp popup function
        if (typeof window.mailchimp_popup !== 'undefined') {
          console.log("Found Mailchimp popup function");
          window.mailchimp_popup.show();
        } else {
          console.error("Mailchimp popup function not found. Please verify your Mailchimp embed code.");
        }
      };

      script.onerror = (error) => {
        console.error("Failed to load Mailchimp script:", error);
        setScriptLoaded(false);
      };
    } else {
      console.log("Script already loaded. Opening popup...");
      if (typeof window.mailchimp_popup !== 'undefined') {
        window.mailchimp_popup.show();
      } else {
        console.error("Mailchimp popup function not found");
        setScriptLoaded(false);
      }
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
