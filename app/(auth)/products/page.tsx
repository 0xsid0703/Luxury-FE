"use client";
import ProductAbout from "@/components/products/ProductAbout";
import ProductArtists from "@/components/products/ProductArtists";
import ProductBrand from "@/components/products/ProductBrand";
import ProductEdition from "@/components/products/ProductEdition";
import ProductFooter from "@/components/products/ProductFooter";
import ProductHero from "@/components/products/ProductHero";
import ProductMarket from "@/components/products/ProductMarket";
import React from "react";
import { loadMailchimpPopup, resetMailchimpPopup } from "@/utils/mailchimp";

const ProductPage = () => {
  const handleButtonClick = () => {
    resetMailchimpPopup();
    loadMailchimpPopup();
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
