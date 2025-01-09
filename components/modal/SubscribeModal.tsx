"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { X } from 'lucide-react'
import Image from 'next/image'
import { toast } from '@/hooks/use-toast'
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
        console.log({API_KEY}, {LIST_ID})
        if (!email) {
            setError("Please input email address!")
        }else if(!isValidEmail(email)){ 
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
                console.log({error})
                toast({ description: 'Something went wrong' })
            }
        }
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pb-36">
            <div className="bg-white shadow-lg w-full sm:w-[600px] relative m-5">
                <Button className='absolute w-8 h-8 top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300 p-2 hover:bg-gray-300' onClick={onClose}><X size={16} color='#000' /></Button>
                {!status && <div className='w-full h-full flex flex-row'>
                    <div className='w-full sm:w-3/5 flex flex-col py-8 pl-8 pr-4 gap-10'>
                        <div className='text-2xl text-center font-semibold'>Get exclusive updates<br /> and offers!</div>
                        <div className='flex flex-col gap-0'>
                            <span className='text-base'>Email *</span>
                            <input name='text' className='rounded-md hover:outline-none p-2 border border-black' onChange={(e) => setEmail(e.target.value)}></input>
                            <span className='text-sm text-[#ff0000]'>{error}</span>
                        </div>
                        <div className='w-full flex flex-col items-center gap-5'>
                            <Button className='bg-[#1F1B16] w-full rounded-md py-6 text-white hover:bg-[#1F1B16] hover:text-white hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all text-lg font-medium' onClick={handleClick}>Subscribe</Button>
                            <Image src={'/mailchimp.svg'} width={250} height={100} alt='' className='w-2/5' />
                        </div>
                    </div>
                    <div className='hidden sm:block w-2/5 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: "url(/subscribe.png)" }}>
                    </div>
                </div>}
                {status && <div className='w-full h-full flex flex-col gap-14 items-center py-20'>
                    <span className='text-2xl text-center font-semibold'>Thanks for subscribing!</span>
                    <Image src={'/mailchimp.svg'} width={250} height={100} alt='' className='w-[150px] h-[50px]' />
                </div>}
            </div>
        </div>
    )
}

export default SubscribeModal