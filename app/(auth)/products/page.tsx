"use client";
import SubscribeModal from "@/components/modal/SubscribeModal";
import ProductAbout from "@/components/products/ProductAbout";
import ProductArtists from "@/components/products/ProductArtists";
import ProductBrand from "@/components/products/ProductBrand";
import ProductEdition from "@/components/products/ProductEdition";
import ProductFooter from "@/components/products/ProductFooter";
import ProductHero from "@/components/products/ProductHero";
import ProductMarket from "@/components/products/ProductMarket";
import React, { useState } from "react";

const ProductPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleButtonClick = () => {
    setIsOpen(true)
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
      {
        isOpen && <SubscribeModal onClose={() => setIsOpen(false)}/>
      }
    </div>
  );
};

export default ProductPage;
