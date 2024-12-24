import ProductAbout from "@/components/products/ProductAbout";
import ProductArtists from "@/components/products/ProductArtists";
import ProductBrand from "@/components/products/ProductBrand";
import ProductEdition from "@/components/products/ProductEdition";
import ProductHero from "@/components/products/ProductHero";
import ProductMarket from "@/components/products/ProductMarket";
import React from "react";

const ProductPage = () => {
  return (
    <div className="min-h-screen">
      <ProductHero />
      <ProductEdition />
      <ProductBrand />
      <ProductAbout />
      <ProductArtists />
      <ProductMarket />
    </div>
  );
};

export default ProductPage;
