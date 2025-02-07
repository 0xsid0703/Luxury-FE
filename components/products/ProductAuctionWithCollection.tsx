"use client"
import React from 'react'
import { Product } from '@/lib/shopify/types';
import { ProductProvider } from '../product/product-context';
import { UserSubscriptionPlan } from '@/types';
import CustomButton from '../ui/CustomButton';
import { useSigninModal } from "@/hooks/use-signin-modal";
import PurchaseButton from '../ui/PurchaseButton';
import CountdownTimer from './EndTime';

type Props = {
    product: Product,
    product_image: string,
    collection_name: string,
    volume: string,
    product_name: string,
    edition: string,
    product_type: string,
    price_amount: string,
    currency: string,
    artist: string,
    collection: string,
    subscriptionPlan: UserSubscriptionPlan | undefined;
    auction: any
}

const ProductAuctionWithCollection = ({ product_image, collection_name, volume, product_name, edition, product_type, price_amount, currency, product, subscriptionPlan, auction }: Props) => {
    const signInModal = useSigninModal();
    const productJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.featuredImage.url,
        offers: {
            '@type': 'AggregateOffer',
            availability: product.availableForSale
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            priceCurrency: product.priceRange.minVariantPrice.currencyCode,
            highPrice: product.priceRange.maxVariantPrice.amount,
            lowPrice: product.priceRange.minVariantPrice.amount
        }
    };
    return (
        <ProductProvider>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productJsonLd)
                }}
            />
            <div className="rounded-xl bg-[#F3F4F6] flex sm:flex-row flex-col">
                <div className="sm:w-2/5 w-full aspect-[500/447] bg-center bg-no-repeat bg-cover sm:rounded-bl-xl rounded-tl-xl sm:rounded-tr-none rounded-tr-xl rounded-bl-none" style={{ backgroundImage: `url(${product_image})` }}></div>
                <div className="sm:w-3/5 w-full flex flex-col justify-start sm:gap-0 gap-8 sm:justify-between py-9 text-[#0B1934] sm:px-[70px] px-3">
                    <div className='flex flex-col sm:gap-11 gap-6'>
                        <div className="flex flex-col sm:gap-3 gap-1">
                            <span className="sm:text-lg text-sm text-[#A88573]">{collection_name}</span>
                            <span className="sm:text-3xl text-2xl font-bold">{product_name}</span>
                        </div>
                        <div className='flex flex-col sm:gap-3 gap-1 text-base'>
                            <div className="flex flex-row gap-1 items-center">
                                <div className="font-medium text-[#8C99A1]">Edition:</div>
                                <div className="">{edition}</div>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <div className="font-medium text-[#8C99A1]">Brand:</div>
                                <div className="">{collection_name}</div>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <div className="font-medium text-[#8C99A1]">Product Type:</div>
                                <div className="">{product_type}</div>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <div className="font-medium text-[#8C99A1]">Size:</div>
                                <div className="">{volume} ml</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col justify-between pt-5 border-t border-[#E4E6EB] sm:gap-0 gap-4">
                        <div className="flex flex-col gap-1">
                            <div className='font-semibold sm:text-lg text-sm flex flex-row gap-3 items-center'>
                                <span className='text-[#8C99A1]'>Ends on {new Date(auction.auction.end_date).toLocaleDateString("en-US", { month: "short", day: "2-digit" })}</span>
                                <div className='h-full my-1 w-[1px] bg-[#8C99A1]'></div>
                                <CountdownTimer enddate={auction.auction.end_date} />
                            </div>
                            <div className='flex flex-row gap-2 items-end'>
                                <span className="font-light sm:text-4xl text-3xl  text-[#0B1934]">{`${new Intl.NumberFormat(undefined, {
                                    style: 'currency',
                                    currency: currency,
                                    currencyDisplay: 'narrowSymbol'
                                }).format(parseFloat(price_amount))}`}</span>
                                <span className='text-[#A88573] text-lg h-fit'>{auction.auction.bid_count} bids</span>
                            </div>
                        </div>
                        {
                            subscriptionPlan ?
                                <PurchaseButton text='Get to Bid' className='bg-[#A88573] text-lg text-white hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 w-fit px-6 h-fit py-2' onClick={() => {
                                    console.log('Get to Bid')
                                }} />
                                :
                                <CustomButton text='Sign Up' className='bg-[#A88573] text-lg text-white hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 w-fit py-2 px-6' onClick={() => signInModal.onOpen()} />
                        }
                    </div>
                </div>
            </div>
        </ProductProvider>
    )
}

export default ProductAuctionWithCollection