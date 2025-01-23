import Image from 'next/image'
import React from 'react'

type Props = {
    collection: any,
    product: any,
}

const Product = ({ collection, product }: Props) => {
    return (
        <div className='w-full flex flex-row gap-10 p-2'>
            <div className='w-[420px] h-[250px] relative'>
                <Image src={product.featuredImage.url} width={420} height={250} alt={product.featuredImage.altText} className='rounded-3xl grayscale hover:grayscale-0 w-full h-full' />
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
                        <span className='text-lg'>{collection.title}</span>
                        <span className='text-3xl font-semibold'>{product.title}</span>
                        <span className='text-base'>{product.description}</span>
                    </div>
                    <span className='text-sm'>{product.tags.length > 0 && product.tags[0]}</span>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <span className='font-semibold text-[42px]'>{`${new Intl.NumberFormat(undefined, {
                        style: 'currency',
                        currency: product.variants[0].price.currencyCode,
                        currencyDisplay: 'narrowSymbol'
                    }).format(parseFloat(product.variants[0].price.amount))}`}</span>
                    <a href={`/products/${collection.handle}`} className='bg-black h-fit text-white px-8 py-4 rounded-2xl font-medium hover:shadow-[0_0_0_0px_black,0_8px_0_0_#FFE281] hover:-translate-y-2 transition-all'>
                        View Sale Details
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Product