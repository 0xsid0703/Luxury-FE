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
import { UserSubscriptionPlan } from '@/types';
import ProductInvestment from './ProductInvestment';

type Props = {
  products: any[];
  subscriptionPlan: UserSubscriptionPlan | undefined;
  collectionData: any;
}

const ProductPage = ({ products, subscriptionPlan, collectionData  }: Props) => {
  return (
    <div className="min-h-screen">
      <ProductHeader />
      <ProductHero products={products} subscriptionPlan={subscriptionPlan} collectionData={collectionData} />
      <ProductEdition />
      <ProductBrand />
      <ProductAbout />
      <ProductArtists />
      <ProductMarket />
      <ProductInvestment />
      <ProductFooter />
    </div>
  );
};

export default ProductPage