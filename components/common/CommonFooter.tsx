import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CommonFooter = () => {
    return (
        <div className='w-full bg-transparent py-6 sm:px-0 px-6'>
            <div className='container mx-auto flex flex-col gap-3'>
                <div className='flex flex-row justify-between items-center '>
                    <Image src={'/logo.png'} width={88} height={44} alt="" className='w-[88px] h-[44px]' />
                    <div className='w-fit h-full flex flex-row gap-6'>
                        <Image src={'/telegram-footer.png'} width={24} height={24} alt="" className='sm:w-6 sm:h-6 w-5 h-5' />
                        <Image src={'/twitter-footer.png'} width={24} height={24} alt="" className='sm:w-6 sm:h-6 w-5 h-5' />
                        <Image src={'/discord-footer.png'} width={24} height={24} alt="" className='sm:w-6 sm:h-6 w-5 h-5' />
                    </div>
                </div>
                <div className='h-[1px] bg-[#DDE2EA] w-full'></div>
                <div className='flex sm:flex-row flex-col sm:justify-between sm:items-center items-start sm:gap-0 gap-8'>
                    <p className='text-[#8C99A1] text-xs font-medium hidden sm:block'>© Go FUND ART 2025 All rights reserved.</p>
                    <div className='w-fit h-full flex flex-row sm:gap-11 gap-10'>
                        <Link href={'/'} className='text-[#0B1934] text-sm sm:text-[15px] font-medium'>Terms of Service</Link>
                        <Link href={'/'} className='text-[#0B1934] text-sm sm:text-[15px] font-medium'>Privacy Policy</Link>
                    </div>
                    <p className='text-[#8C99A1] text-xs font-medium block sm:hidden'>© Go FUND ART 2025 All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default CommonFooter