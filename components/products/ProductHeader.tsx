import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ProductHeader = () => {
    return (
        <div className='bg-product-hero sm:px-0 px-4'>
            <div className="container mx-auto flex flex-col sm:pt-36 pt-32 items-center sm:pb-36 pb-32">
                <div className="text-[#B5B7B8] sm:text-base text-sm">Product Overview</div>
                <div className="flex flex-col items-center">
                    <span className="font-normal sm:text-6xl text-3xl text-[#E3713D]">
                        Cardinal Du Four:{" "}
                    </span>
                    <span className="font-normal sm:text-6xl text-3xl text-white text-center">
                        Craftsmanship, Heritage, and Innovation
                    </span>
                </div>
                <div className="sm:mt-12 mt-9 flex flex-row gap-6">
                    <Link href={"/"}><Image src={"/product/instagram.png"} width={24} height={24} alt="" /></Link>
                    <Link href={"/"}><Image src={"/product/facebook.png"} width={24} height={24} alt="" /></Link>
                    <Link href={"/"}><Image src={"/product/x.png"} width={24} height={24} alt="" /></Link>
                    <Link href={"/"}><Image src={"/product/tiktok.png"} width={24} height={24} alt="" /></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductHeader