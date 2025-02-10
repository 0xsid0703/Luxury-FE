"use client"
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, X } from 'lucide-react'
import CountdownTimer from '../products/EndTime'
import * as Icons from "@/components/ui/icons";

interface Bid {
    bid_amount: number;
    bidder: string;
    time: string;
}

type Props = {
    onClose: () => void;
    product: any;
    collection_name: string;
    user: any
}

const AuctionBidDialog = ({ onClose, product, collection_name, user }: Props) => {
    const [isViewHistory, setIsViewHistory] = React.useState(false)
    const [bid_amount, setBidAmount] = React.useState(0.0);
    const [error, setError] = React.useState("")
    const [status, setStatus] = React.useState("")
    const [bids, setBids] = React.useState<Bid[]>([])
    const [loading, setLoading] = React.useState(false)
    const makeName = (name: string) => {
        return name.split(' ').map(word => word[0] + "*".repeat(word.length - 1)).join(' ');
    }
    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        const options: Intl.DateTimeFormatOptions = {
            month: "numeric",
            day: "numeric",
            year: "numeric", // Correct
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        };

        return date.toLocaleString("en-US", options).replace(",", " -").replaceAll("/", ".");
    }
    const handleBid = async () => {
        setLoading(true)
        const bidder = user?.name;
        const product_id = product.id.split('/').pop() || "";
        const res = await fetch("/api/auction/bid", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ product_id, bidder, bid_amount, min_increment: parseFloat(product.auctionProduct.auction.minimum_bid_increment) }),
        })
        const response = await res.json()
        console.log({ res })
        if (res.ok) {
            setError("")
            setStatus(response.message)
        } else {
            setStatus("")
            setError(response.error)
        }
        setLoading(false)
    }
    useEffect(() => {
        const fetchBids = async () => {
            const res = await fetch("/api/auction/history", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ product_id: product.id.split('/').pop() }),
            })
            const result = await res.json()
            const sortedBids = result.bidHistory.sort((a: any, b: any) => new Date(b.time).getTime() - new Date(a.time).getTime())
            setBids(sortedBids)
        }
        fetchBids()
    }, [product])
    const handleViewHistory = async () => {
        setError("")
        setStatus("")
        const res = await fetch("/api/auction/history", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ product_id: product.id.split('/').pop() }),
        })
        const result = await res.json()
        const sortedBids = result.bidHistory.sort((a: any, b: any) => new Date(b.time).getTime() - new Date(a.time).getTime())
        setBids(sortedBids)
        setIsViewHistory(true)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pb-36">
            {!isViewHistory && <div className="bg-white shadow-lg w-full sm:w-[612px] relative m-5 rounded-2xl">
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
                                        <span className='text-[#A88573] text-lg h-fit'>{bids.length} bids</span>
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
                                <input type='number' placeholder='Enter your bid' className='px-6 py-4 rounded-lg border border[#8C99A1]' onChange={(e) => setBidAmount(parseFloat(e.target.value))} />
                                <span className='text-[#8C99A1] text-sm'>Enter {`${new Intl.NumberFormat(undefined, {
                                    style: 'currency',
                                    currency: product.variants[0].price.currencyCode,
                                    currencyDisplay: 'narrowSymbol'
                                }).format(parseFloat((bids[0]?.bid_amount + product.auctionProduct.auction.minimum_bid_increment) || product.variants[0].price.amount))}`} or more (Bid increment: {`${new Intl.NumberFormat(undefined, {
                                    style: 'currency',
                                    currency: product.variants[0].price.currencyCode,
                                    currencyDisplay: 'narrowSymbol'
                                }).format(parseFloat(product.auctionProduct.auction.minimum_bid_increment))}`})</span>
                                <div className='text-red-600 text-sm'>{error}</div>
                                <div className='text-green-600 text-sm'>{status}</div>
                                <div className='text-[#A88573] text-base font-semibold cursor-pointer sm:hidden block' onClick={handleViewHistory}>View bids history</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center w-full h-fit'>
                        <div className='text-[#A88573] text-base font-semibold cursor-pointer sm:block hidden' onClick={handleViewHistory}>View bids history</div>
                        <div className='flex justify-end flex-row gap-3 items-center'>
                            <Button className='shadow-none px-6 py-[14px] text-[#0B1934] bg-[#F3F4F6] rounded-full hover:bg-[#E6E7E9]' onClick={onClose}>Cancel</Button>
                            <Button className='shadow-none px-6 py-[14px] text-[#FFFFFF] bg-[#0B1934] rounded-full hover:bg-[#0B1934]' onClick={handleBid}>{loading && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}Place Bid</Button>
                        </div>
                    </div>
                </div>
            </div >}
            {isViewHistory && <div className='bg-white shadow-lg w-full sm:w-[612px] relative m-5 rounded-2xl'>
                <Button className='absolute w-8 h-8 top-5 right-5 bg-transparent shadow-none translate-x-1/2 -translate-y-1/2 text-[#0B1934]' onClick={onClose}><X size={20} color='#0B1934' /></Button>
                <div className='w-full h-full flex flex-col gap-[106px] rounded-2xl sm:py-8 sm:px-10 py-5 px-6'>
                    <div className='flex flex-col gap-12 w-full'>
                        <div className='flex flex-col w-full gap-4'>
                            <div className='flex flex-row items-center gap-4'>
                                <div className='w-8 h-8 rounded-full bg-[#F9F7F6] cursor-pointer flex items-center justify-center' onClick={() => setIsViewHistory(false)}><ArrowLeft /></div>
                                <div className='text-2xl sm:text-3xl text-[#0B1934]'>Bids history</div>
                            </div>
                            <div className='w-full h-[1px] bg-[#DDE2EA]'></div>
                            <div className='w-full h-[400px] overflow-y-auto about-scrollbar'>
                                <table className='w-full border-collapse rounded-lg overflow-hidden'>
                                    <thead className=''>
                                        <tr className='bg-[#F3F4F6] w-full'>
                                            <th className='text-[#2A2B39] text-xs sm:text-[15px] sm:py-3 sm:pl-4 py-2 pl-2 font-semibold text-left'>Bidder</th>
                                            <th className='text-[#2A2B39] text-xs sm:text-[15px] sm:py-3 sm:pl-4 py-2 pl-2 font-semibold text-left'>Amount</th>
                                            <th className='text-[#2A2B39] text-xs sm:text-[15px] sm:py-3 sm:pl-4 py-2 pl-2 font-semibold text-left'>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            bids.map((bid: Bid) => (
                                                <tr className='border border-[#F3F4F6]'>
                                                    <td className='text-[#2A2B39] text-xs sm:text-[15px] sm:py-3 sm:pl-4 py-2 pl-2'>{makeName(bid.bidder)}</td>
                                                    <td className='text-[#2A2B39] text-xs sm:text-[15px] sm:py-3 sm:pl-4 py-2 pl-2'>{`${new Intl.NumberFormat(undefined, {
                                                        style: 'currency',
                                                        currency: product.variants[0].price.currencyCode,
                                                        currencyDisplay: 'narrowSymbol'
                                                    }).format(bid.bid_amount)}`}</td>
                                                    <td className='text-[#2A2B39] text-xs sm:text-[15px] sm:py-3 sm:pl-4 py-2 pl-2'>{formatDate(bid.time)}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div >
    )
}

export default AuctionBidDialog