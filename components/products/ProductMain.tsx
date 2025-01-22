"use client"
import React, { useState } from 'react'
import ProductHero from './ProductHero';
import ProductEdition from './ProductEdition';
import ProductBrand from './ProductBrand';
import ProductAbout from './ProductAbout';
import ProductArtists from './ProductArtists';
import ProductMarket from './ProductMarket';
import ProductFooter from './ProductFooter';
import SubscribeModal from '../modal/SubscribeModal';

type Props = {
    products: any[];
}

const ProductPage = ({ products }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleButtonClick = () => {
      setIsOpen(true)
    };
  
    return (
      <div className="min-h-screen">
        <ProductHero loadMailchimpPopup={handleButtonClick} products={products}/>
        <ProductEdition />
        <ProductBrand />
        <ProductAbout />
        <ProductArtists />
        <ProductMarket />
        <ProductFooter />
        {
          isOpen && <SubscribeModal onClose={() => setIsOpen(false)} />
        }
      </div>
    );
  };

export default ProductPage