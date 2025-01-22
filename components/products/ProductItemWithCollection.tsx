import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
type Props = {
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

const ProductItemWithCollection = ({ product_image, collection_name, volume, product_name, edition, product_type, artist, price_amount, currency }: Props) => {
    return (
        <div className="rounded-2xl bg-[#380B11] flex flex-row gap-40 p-10">
            <div className="w-1/3 flex flex-col gap-10">
                <div className="text-white flex flex-col">
                    <span className="text-3xl font-bold">{collection_name}</span>
                    <span className="text-lg text-opacity-50">({volume} ml)</span>
                </div>
                <Image
                    src={product_image}
                    width={400}
                    height={400}
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
                        <Button className="bg-[#E3713D] outline outline-4 outline-[#D49F5E]/20 text-white rounded-full py-7 px-9 text-lg   hover:shadow-[0_0_0_0px_black,0_8px_0_0_#63151F] hover:-translate-y-2 transition-all hover:bg-[#E3713D]">
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItemWithCollection