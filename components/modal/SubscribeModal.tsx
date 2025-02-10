"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ArrowRight, X } from 'lucide-react'
import Image from 'next/image'
import { toast } from '@/hooks/use-toast'
import clsx from 'clsx'
type Props = {
    onClose: () => void;
}
const SubscribeModal = ({ onClose }: Props) => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [status, setStatus] = useState(false)
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleClick = async () => {
        const API_KEY = process.env.MAILCHIMP_API_KEY!;
        const LIST_ID = process.env.MAILCHIMP_LIST_ID!;
        console.log({ API_KEY }, { LIST_ID })
        if (!email) {
            setError("Please input email address!")
        } else if (!isValidEmail(email)) {
            setError("Please input valid email address!")
        }
        else {
            setError("")
            try {
                const res = await fetch("/api/subscribe", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                });

                const data = await res.json();

                if (!res.ok) {
                    toast({ description: `${data.error}` })
                } else {
                    setStatus(true)
                }
            } catch (error) {
                console.log({ error })
                toast({ description: 'Something went wrong' })
            }
        }
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 sm:pb-36 pb-0">
            <div className="bg-white shadow-lg w-full relative mx-5 rounded-2xl sm:w-fit">
                <Button className={clsx('absolute w-8 h-8 top-5 right-5 translate-x-1/2 -translate-y-1/2 shadow-none', status && 'hidden')} onClick={onClose}><X className='w-6 h-6' color='#F9F7F6' /></Button>
                {! status && <div className='w-full h-full flex sm:flex-row flex-col rounded-2xl sm:w-[864px]'>
                    <div className='block sm:hidden sm:w-1/2 w-full h-[260px] bg-cover bg-no-repeat bg-center rounded-t-2xl' style={{ backgroundImage: "url(/subscribe.png)" }}>
                    </div>
                    <div className='w-full sm:w-1/2 flex flex-col sm:py-14 sm:pl-11 sm:pr-20 py-8 px-6 sm:gap-12 gap-8'>
                        <div className='flex flex-col gap-3'>
                            <div className='sm:text-3xl text-2xl font-normal'>Get exclusive updates<br /> and offers!</div>
                            <div className='text-sm text-[#8C99A1]'>Be the first to know about exclusive releases, special offers, and luxury collectibles. Subscribe now and never miss an update!</div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-sm font-medium'>Enter your email</span>
                            <input name='text' className='py-4 px-6 rounded-2xl hover:outline-none border border-[#DDE2EA] text-sm' placeholder='name@example.com' onChange={(e) => setEmail(e.target.value)}></input>
                            <span className='text-sm text-[#ff0000]'>{error}</span>
                            <Button className='sm:mt-6 mt-4 bg-[#A88573] w-full rounded-2xl py-6 text-white hover:bg-[#A88573] hover:text-white hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all text-base font-medium flex flex-row justify-center gap-2' onClick={handleClick}><span>Subscribe</span><ArrowRight color='#fff' size={16} /></Button>
                        </div>
                    </div>
                    <div className='hidden sm:block sm:w-1/2 w-full bg-cover bg-no-repeat bg-center rounded-r-2xl' style={{ backgroundImage: "url(/subscribe.png)" }}>
                    </div>
                </div>}
                {status && <div className='w-full h-full flex flex-col gap-6 items-center sm:py-10 sm:px-20 py-8 px-14 rounded-2xl'>
                    <Image src={'/footer1.png'} width={169} height={87.5} alt='' className='' />
                    <div className='flex flex-col gap-[14px] items-center w-full'>
                        <div className='sm:text-3xl text-2xl text-center'>Thanks for subscription!</div>
                        <div className='text-sm text-[#8C99A1] text-center'>You're now on the list—exciting updates are coming your way!</div>
                    </div>
                    <Button className='sm:mt-6 mt-4 bg-[#A88573] w-fit rounded-2xl py-6 px-10 text-white hover:bg-[#A88573] hover:text-white hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all text-base font-medium' onClick={onClose}>Close</Button>
                </div>}
            </div>
        </div>
    )
}

export default SubscribeModal