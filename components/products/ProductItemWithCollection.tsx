import React from 'react'
import Image from 'next/image'
import { AddToCart } from '../cart/add-to-cart'
import { Product } from '@/lib/shopify/types';
import { ProductProvider } from '../product/product-context';

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
}

const ProductItemWithCollection = ({ product_image, collection_name, volume, product_name, edition, product_type, artist, price_amount, currency, product }: Props) => {
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
            <div className="rounded-2xl bg-[#380B11] flex flex-row gap-40 p-10">
                <div className="w-1/3 flex flex-col gap-5">
                    <div className="text-white flex flex-col">
                        <span className="text-3xl font-bold">{collection_name}</span>
                        <span className="text-lg text-opacity-50">({volume} ml)</span>
                    </div>
                    <Image
                        src={product_image}
                        width={350}
                        height={350}
                        className="w-full aspect-square object-cover object-center rounded-3xl"
                        alt=""
                    />
                </div>
                <div className="w-2/3 flex flex-col justify-between divide-y divide-white divide-opacity-10">
                    <div className='flex flex-col divide-y divide-white divide-opacity-10'>
                        <div className="flex flex-row gap-6 pb-5">
                            <div className="w-1/3 text-white font-medium">Brand:</div>
                            <div className="w-2/3 text-lg text-white">{collection_name}</div>
                        </div>
                        <div className="flex flex-row gap-6 py-5">
                            <div className="w-1/3 text-white font-medium">Product name:</div>
                            <div className="w-2/3 text-lg text-white">
                                {product_name} (Collaboration with {artist})
                            </div>
                        </div>
                        <div className="flex flex-row gap-6 py-5">
                            <div className="w-1/3 text-white font-medium">Edition:</div>
                            <div className="w-2/3 text-lg text-white">
                                {edition}
                            </div>
                        </div>
                        <div className="flex flex-row gap-6 py-5">
                            <div className="w-1/3 text-white font-medium">Product Type:</div>
                            <div className="w-2/3 text-lg text-white">
                                {product_type}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col py-5">
                        <span className="font-bold text-white text-lg hidden">
                            Available for pre-order:
                        </span>
                        <div className="flex flex-row justify-between w-full">
                            <span className="font-bold text-white text-5xl">{`${new Intl.NumberFormat(undefined, {
                                style: 'currency',
                                currency: currency,
                                currencyDisplay: 'narrowSymbol'
                            }).format(parseFloat(price_amount))}`}</span>
                            <AddToCart product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </ProductProvider>
    )
}

export default ProductItemWithCollection