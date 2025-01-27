"use client"
import React from 'react'
import ProductHero from './ProductHero';
import ProductEdition from './ProductEdition';
import ProductBrand from './ProductBrand';
import ProductAbout from './ProductAbout';
import ProductArtists from './ProductArtists';
import ProductMarket from './ProductMarket';
import ProductFooter from './ProductFooter';
import ProductHeader from './ProductHeader';

type Props = {
    products: any[];
}

const ProductPage = ({ products }: Props) => {
  
    return (
      <div className="min-h-screen">
        <ProductHeader />
        <ProductHero products={products}/>
        <ProductEdition />
        <ProductBrand />
        <ProductAbout />
        <ProductArtists />
        <ProductMarket />
        <ProductFooter />
      </div>
    );
  };

export default ProductPage