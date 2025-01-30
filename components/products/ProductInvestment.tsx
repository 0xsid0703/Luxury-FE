import React from 'react'

const ProductInvestment = () => {
    return (
        <div className='flex flex-col sm:py-20 py-10 container mx-auto sm:gap-10 sm:px-0 px-6 gap-8'>
            <div className='sm:text-3xl text-2xl text-[#0B1934] font-medium'>Investment Hightlights</div>
            <div className='grid sm:grid-cols-4 grid-cols-1 sm:gap-9 gap-5'>
                <div className='flex flex-col sm:gap-3'>
                    <div className='text-lg font-medium text-[#0B1934]'>Historical Returns</div>
                    <div className='text-[#2A2B39] text-sm'>{`Rare Armagnac bottles have shown a 200% ROI in recent years due to increased demand for collectible luxury spirits(Unveiling Cardinal Du F…)`}</div>
                </div>
                <div className='flex flex-col sm:gap-3'>
                    <div className='text-lg font-medium text-[#0B1934]'>Market Rarity</div>
                    <div className='text-[#2A2B39] text-sm'>{`Only 500 bottles, ensuring high exclusivity and demand in the secondary market`}</div>
                </div>
                <div className='flex flex-col sm:gap-3'>
                    <div className='text-lg font-medium text-[#0B1934]'>Authentication</div>
                    <div className='text-[#2A2B39] text-sm'>{`NFC chip linked to a digital certificate, guaranteeing proof of ownership and authenticity`}</div>
                </div>
                <div className='flex flex-col sm:gap-3'>
                    <div className='text-lg font-medium text-[#0B1934]'>Storage Options</div>
                    <div className='text-[#2A2B39] text-sm'>{`Store in secure vaults across 40 countries, fully insured and accessible at any time`}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductInvestment