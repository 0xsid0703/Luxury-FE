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
    console.log("Button clicked! Trying to load script..."); // Debugging line
    
    // If the script isn't already loaded
    if (!scriptLoaded) {
      const script = document.createElement("script");
      script.id = "mcjs";
      script.src =
        "https://chimpstatic.com/mcjs-connected/js/users/9ae7f4c2cd8fb05a3073a6f81/418afc31df317a39db97f2028.js";
      script.async = true;

      // Check if the script is appended to the body
      console.log("Appending script to body...");
      document.head.appendChild(script);
      

      // When the script is loaded, open the Mailchimp popup
      script.onload = () => {
        console.log("Mailchimp popup script loaded.");
        setScriptLoaded(true);
        console.log("Hello: ", window.mc4wp)
        if (window.mc4wp) {
          console.log("Opening Mailchimp popup...");
          window.mc4wp.openPopup(); // Trigger Mailchimp popup
        }
      };

      script.onerror = () => {
        console.error("Failed to load Mailchimp script.");
      };
    } else {
      console.log("Script already loaded. Opening popup...");
      // If script is already loaded, open the popup directly
      if (window.mc4wp) {
        window.mc4wp.openPopup();
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
