"use client"
import React, { useState } from 'react'
import Product from './Product';
import Link from 'next/link';

type Props = {
    collections: any[];
    products: any[]
}

const UpcomingSale = ({ collections, products }: Props) => {
    const [showMore, setShowMore] = useState(4);
    console.log({ products })
    return (
        <div className="container mx-auto pt-36 pb-14 flex flex-col gap-12 items-center">
            <div className='flex flex-col w-full'>
                <span className="text-[#1E1E1E] text-3xl font-semibold">Upcoming Sales</span>
                <span className=''>Get ready for exclusive, upcoming  releases. Be the first<br /> to get your hands on rares.</span>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                {products.slice(0, showMore).map((product, index:number) => (
                    <Product
                        key={index}
                        collection={collections.find((collection) => collection.handle === product.collection.handle)}
                        product={product}
                    />
                ))}
            </div>
            {showMore < collections.length && (
                <button
                    className="border border-black bg-white text-black px-8 py-2 rounded-xl font-medium hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all"
                    onClick={() => {
                        showMore + 5 >= collections.length
                            ? setShowMore(collections.length)
                            : setShowMore(showMore + 5)
                    }}
                >
                    Show More
                </button>
            )}
            <div className="border-t border-[#CDCDCD] flex flex-row justify-between pt-8 w-full">
                <Link href={"/"} className="text-[#99A1A3] text-base">
                    GO FUND ART @copyright
                </Link>
                <div className="flex flex-row gap-10">
                    <Link href={"/"} className="text-[#99A1A3] text-base">
                        Terms of use
                    </Link>
                    <Link href={"/"} className="text-[#99A1A3] text-base">
                        Privacy & Terms
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UpcomingSale