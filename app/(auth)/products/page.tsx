"use client";
import ProductAbout from "@/components/products/ProductAbout";
import ProductArtists from "@/components/products/ProductArtists";
import ProductBrand from "@/components/products/ProductBrand";
import ProductEdition from "@/components/products/ProductEdition";
import ProductFooter from "@/components/products/ProductFooter";
import ProductHero from "@/components/products/ProductHero";
import ProductMarket from "@/components/products/ProductMarket";
import React from "react";


const ProductPage = () => {
  const loadMailchimpPopup = () => {
    if (window.dojoRequire) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.dojoRequire(["mojo/signup-forms/Loader"], function (L: any) {
        L.start({
          baseUrl: "mc.us1.list-manage.com",
          uuid: "9ae7f4c2cd8fb05a3073a6f81",
          lid: "418afc31df317a39db97f2028",
        });
      });
    } else {
      console.error("Mailchimp script not loaded properly.");
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
