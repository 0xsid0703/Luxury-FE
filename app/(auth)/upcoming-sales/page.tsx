"use client"
import Product from '@/components/upcoming-sales/Product';
import Link from 'next/link';
import React, { useState } from 'react'

const UpcomingSalesPage = () => {
    const [showMore, setShowMore] = useState(4);
    const upcoming_sales = [
        {
            photo: "/product.png",
            num_limited: 500,
            title: "21 Rébellion Limited Edition",
            description: "Exclusive bottle artwork by Martin Myers, transforming each piece into a collectible masterpiece.",
            price: 10000,
            link: "#",
        },
        {
            photo: "/product.png",
            num_limited: 500,
            title: "21 Rébellion Limited Edition",
            description: "Exclusive bottle artwork by Martin Myers, transforming each piece into a collectible masterpiece.",
            price: 10000,
            link: "#",
        },
        {
            photo: "/product.png",
            num_limited: 500,
            title: "The backbone of NFTs and their security",
            description: "Exclusive bottle artwork by Martin Myers, transforming each piece into a collectible masterpiece.",
            price: 10000,
            link: "#",
        },
        {
            photo: "/product.png",
            num_limited: 500,
            title: "21 Rébellion Limited Edition",
            description: "Exclusive bottle artwork by Martin Myers, transforming each piece into a collectible masterpiece.",
            price: 10000,
            link: "#",
        },
        {
            photo: "/product.png",
            num_limited: 500,
            title: "21 Rébellion Limited Edition",
            description: "Exclusive bottle artwork by Martin Myers, transforming each piece into a collectible masterpiece.",
            price: 10000,
            link: "#",
        },
        {
            photo: "/product.png",
            num_limited: 500,
            title: "21 Rébellion Limited Edition",
            description: "Exclusive bottle artwork by Martin Myers, transforming each piece into a collectible masterpiece.",
            price: 10000,
            link: "#",
        },
        {
            photo: "/product.png",
            num_limited: 500,
            title: "The backbone of NFTs and their security",
            description: "Exclusive bottle artwork by Martin Myers, transforming each piece into a collectible masterpiece.",
            price: 10000,
            link: "#",
        },
        {
            photo: "/product.png",
            num_limited: 500,
            title: "21 Rébellion Limited Edition",
            description: "Exclusive bottle artwork by Martin Myers, transforming each piece into a collectible masterpiece.",
            price: 10000,
            link: "#",
        },
        {
            photo: "/product.png",
            num_limited: 500,
            title: "21 Rébellion Limited Edition",
            description: "Exclusive bottle artwork by Martin Myers, transforming each piece into a collectible masterpiece.",
            price: 10000,
            link: "#",
        },
        {
            photo: "/product.png",
            num_limited: 500,
            title: "21 Rébellion Limited Edition",
            description: "Exclusive bottle artwork by Martin Myers, transforming each piece into a collectible masterpiece.",
            price: 10000,
            link: "#",
        },
        {
            photo: "/product.png",
            num_limited: 500,
            title: "The backbone of NFTs and their security",
            description: "Exclusive bottle artwork by Martin Myers, transforming each piece into a collectible masterpiece.",
            price: 10000,
            link: "#",
        },
        {
            photo: "/product.png",
            num_limited: 500,
            title: "21 Rébellion Limited Edition",
            description: "Exclusive bottle artwork by Martin Myers, transforming each piece into a collectible masterpiece.",
            price: 10000,
            link: "#",
        },
    ]
    return (
        <div className="min-h-screen">
            <div className="w-full bg-white">
                <div className="container mx-auto pt-36 pb-14 flex flex-col gap-12 items-center">
                    <div className='flex flex-col w-full'>
                        <span className="text-[#1E1E1E] text-3xl font-semibold">Upcoming Sales</span>
                        <span className=''>Get ready for exclusive, upcoming  releases. Be the first<br /> to get your hands on rares.</span>
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        {upcoming_sales.slice(0, showMore).map((sale, index) => (
                            <Product
                                key={index}
                                photo={sale.photo}
                                num_limited={sale.num_limited}
                                title={sale.title}
                                description={sale.description}
                                price={sale.price}
                                link={sale.link}
                            />
                        ))}
                    </div>
                    {showMore < upcoming_sales.length && (
                        <button
                            className="border border-black bg-white text-black px-8 py-2 rounded-xl font-medium"
                            onClick={() => {
                                showMore + 5 >= upcoming_sales.length
                                    ? setShowMore(upcoming_sales.length)
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
            </div>
        </div>
    );
};

export default UpcomingSalesPage;