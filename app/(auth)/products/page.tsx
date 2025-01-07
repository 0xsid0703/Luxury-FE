import ProductAbout from "@/components/products/ProductAbout";
import ProductArtists from "@/components/products/ProductArtists";
import ProductBrand from "@/components/products/ProductBrand";
import ProductEdition from "@/components/products/ProductEdition";
import ProductFooter from "@/components/products/ProductFooter";
import ProductHero from "@/components/products/ProductHero";
import ProductMarket from "@/components/products/ProductMarket";
import Head from "next/head";
import React, { useState } from "react";

const ProductPage = () => {
  const [popupLoaded, setPopupLoaded] = useState(false);

  const loadMailchimpPopup = () => {
    if (!popupLoaded) {
      // Dynamically add Mailchimp script
      const script = document.createElement("script");
      script.src =
        "https://chimpstatic.com/mcjs-connected/js/users/9ae7f4c2cd8fb05a3073a6f81/418afc31df317a39db97f2028.js";
      script.async = true;
      document.body.appendChild(script);

      // Mark script as loaded to prevent reloading
      script.onload = () => setPopupLoaded(true);
    }
  };
  
  return (
    <div className="min-h-screen">
      <Head>
        {/* Add Mailchimp metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
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
