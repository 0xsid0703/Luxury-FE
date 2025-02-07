"use client"
import React from 'react'
import { Button } from '../ui/button'
import { X } from 'lucide-react'
import CountdownTimer from '../products/EndTime'
type Props = {
    onClose: () => void;
    product: any;
    collection_name: string
}
const AuctionBidDialog = ({ onClose, product, collection_name }: Props) => {
    const [isViewHistory, setIsViewHistory] = React.useState(false)
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pb-36">
            <div className="bg-white shadow-lg w-full sm:w-[612px] relative m-5 rounded-2xl">
                <Button className='absolute w-8 h-8 top-5 right-5 bg-transparent shadow-none translate-x-1/2 -translate-y-1/2 text-[#0B1934]' onClick={onClose}><X size={20} color='#0B1934' /></Button>
                <div className='w-full h-full flex flex-col gap-[106px] rounded-2xl sm:py-8 sm:px-10 py-5 px-6'>
                    <div className='flex flex-col gap-12 w-full'>
                        <div className='flex flex-col w-full'>
                            <div className='text-2xl sm:text-3xl text-[#0B1934]'>Place Your Bid</div>
                            <div className='mt-4 h-[1px] w-full bg-[#DDE2EA]'></div>
                            <div className='mt-8 w-full h-[106px]  rounded-md flex flex-row items-center bg-[#F3F4F6] gap-5'>
                                <div className='w-[160px] h-full bg-center bg-no-repeat bg-cover rounded-l-md' style={{ backgroundImage: `url(${product.featuredImage.url})` }}></div>
                                <div className='w-full h-full py-2 flex flex-col justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='text-[#8C99A1] text-sm'>{collection_name}</div>
                                        <div className='text-[#2A2B39] text-[17px] font-medium'>{product.title}</div>
                                    </div>
                                    <div className='flex flex-row gap-2 items-end'>
                                        <span className="font-light sm:text-2xl text-xl  text-[#0B1934]">{`${new Intl.NumberFormat(undefined, {
                                            style: 'currency',
                                            currency: product.variants[0].price.currencyCode,
                                            currencyDisplay: 'narrowSymbol'
                                        }).format(parseFloat(product.variants[0].price.amount))}`}</span>
                                        <span className='text-[#A88573] text-lg h-fit'>{product.auctionProduct.auction.bid_count} bids</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-3'>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='text-[#0B1934] text-lg font-semibold'>Bid Now to Secure</div>
                                <CountdownTimer enddate={product.auctionProduct.auction.end_date} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <input type='text' placeholder='Enter your bid' className='px-6 py-4 rounded-lg border border[#8C99A1]' />
                                <span className='text-[#8C99A1] text-sm'>Enter {`${new Intl.NumberFormat(undefined, {
                                    style: 'currency',
                                    currency: product.variants[0].price.currencyCode,
                                    currencyDisplay: 'narrowSymbol'
                                }).format(parseFloat(product.variants[0].price.amount))}`} or more (Bid increment: {product.auctionProduct.auction.bid_increment})</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center w-full h-fit'>
                        <div className='text-[#A88573] text-base font-semibold cursor-pointer' onClick={() => setIsViewHistory(true)}>View bids history</div>
                        <div className='flex flex-row gap-3 items-center'>
                            <Button className='shadow-none px-6 py-[14px] text-[#0B1934] bg-[#F3F4F6] rounded-full' onClick={onClose}>Cancel</Button>
                            <Button className='shadow-none px-6 py-[14px] text-[#FFFFFF] bg-[#0B1934] rounded-full'>Place Bid</Button>
                        </div>
                    </div>
                </div>
            </div >
            {isViewHistory && <div></div>}
        </div >
    )
}

export default AuctionBidDialog