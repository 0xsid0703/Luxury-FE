import Image from 'next/image'
import React from 'react'
import { ListHightLight } from '../ui/icons'
import { ArrowRight } from 'lucide-react'

type Props = {
    collection: any;
}

const Product = ({ collection }: Props) => {
    return (
        <div className='w-full flex sm:flex-row flex-col sm:gap-16 gap-4 p-2 items-center sm:items-stretch sm:justify-center justify-start bg-white rounded-3xl'>
            <div className='sm:w-[500px] sm:h-[450px] w-full h-[300px] relative'>
                <Image src={collection.image.url} width={500} height={450} alt={collection.image.altText} className='rounded-xl grayscale hover:grayscale-0 w-full h-full' />
                <Image
                    src={"/play.png"}
                    className="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    width={50}
                    height={50}
                    alt=""
                />
            </div>
            <div className='sm:w-2/3 w-full flex flex-col gap-4 sm:justify-between justify-start py-3 sm:px-0 px-6'>
                <div className='flex flex-col'>
                    <span className='text-lg text-[#A88573] sm:mb-6 mb-2'>{collection.title}</span>
                    <span className='sm:text-4xl text-2xl font-semibold mb-3'>{collection.metafields.find((metafield: any) => metafield.key === "sale_name")?.value}</span>
                    <span className='text-base sm:mb-10 mb-7'>{collection.metafields.find((metafield: any) => metafield.key === "heading_sale")?.value}</span>
                    <div className='text-[15px] flex flex-col gap-3 sm:mb-0 mb-7'>{collection.metafields.find((metafield: any) => metafield.key === "hightlights")?.value && JSON.parse(collection.metafields.find((metafield: any) => metafield.key === "hightlights")?.value).map((highlight: any, index: number) => <span key={index} className='flex gap-2 items-center'><ListHightLight />{highlight}</span>)}</div>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <a href={`/products/${collection.handle}`} className='sm:w-fit w-full flex flex-row justify-center gap-3 items-center bg-[#A88573] h-fit text-white px-6 py-4 rounded-full font-semibold hover:shadow-[0_0_0_0px_black,0_8px_0_0_#FFE281] hover:-translate-y-2 transition-all text-base'>
                        View Sale Details
                        <div className='bg-white rounded-full p-2 hidden sm:block'>
                            <ArrowRight color='#000000' />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Product