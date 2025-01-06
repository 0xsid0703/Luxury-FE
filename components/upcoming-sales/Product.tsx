import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    photo: string,
    num_limited: number,
    title: string,
    description: string,
    price: number,
    link: string,
}

const Product = ({ photo, num_limited, title, description, price, link }: Props) => {
    return (
        <div className='w-full flex flex-row gap-10 p-2'>
            <div className='w-1/3 relative'>
                <Image src={photo} width={420} height={250} alt={title} className='rounded-3xl w-full h-fit grayscale hover:grayscale-0' />
                <Image
                    src={"/Play.svg"}
                    className="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    width={50}
                    height={50}
                    alt=""
                />
            </div>
            <div className='w-2/3 flex flex-col gap-4 justify-around'>
                <div className='flex flex-row justify-between gap-5'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-lg'>{'Cardinal Du Four'}</span>
                        <span className='text-3xl font-semibold'>{title}</span>
                        <span className='text-base'>{description}</span>
                    </div>
                    <span className='text-sm'>Limited to {num_limited} bottles worldwide</span>
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='font-semibold text-[42px]'>${price.toLocaleString()}</span>
                    <Link href={link} className='bg-black text-white px-8 py-4 rounded-3xl font-medium' >View Sale Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Product