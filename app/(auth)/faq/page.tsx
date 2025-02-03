import React from 'react'
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

const page = () => {
    const faqs = [
        {
            title: "What happens at the  end of my trial",
            desc: "At the end of your 14-day trial, you'll automatically be downgraded to the Free tier and you’ll be able to continue to use Calendly as long as you’d like. If you decide to upgrade to a paid plan, you can do so from the billing page in your account at any time during or after your trial.",
        },
        {
            title: "What happens at the  end of my trial",
            desc: "At the end of your 14-day trial, you'll automatically be downgraded to the Free tier and you’ll be able to continue to use Calendly as long as you’d like. If you decide to upgrade to a paid plan, you can do so from the billing page in your account at any time during or after your trial.",
        },
        {
            title: "What happens at the  end of my trial",
            desc: "At the end of your 14-day trial, you'll automatically be downgraded to the Free tier and you’ll be able to continue to use Calendly as long as you’d like. If you decide to upgrade to a paid plan, you can do so from the billing page in your account at any time during or after your trial.",
        },
        {
            title: "What happens at the  end of my trial",
            desc: "At the end of your 14-day trial, you'll automatically be downgraded to the Free tier and you’ll be able to continue to use Calendly as long as you’d like. If you decide to upgrade to a paid plan, you can do so from the billing page in your account at any time during or after your trial.",
        },
    ];
    return (
        <div className='min-h-screen bg-white sm:p-0 p-6'>
            <div className='pt-36 w-full h-screen flex flex-col justify-between items-center container mx-auto'>
                <div className='flex flex-col sm:gap-20 gap-10 items-center w-full'>
                    <div className='flex flex-col sm:gap-8 gap-4 justify-center items-center'>
                        <div className='sm:text-6xl text-3xl text-[#0B1934] text-center'>Frequently Asked Questions</div>
                        <div className='text-center sm:text-lg text-sm text-[#2A2B39]'>Find answers to common questions about purchases, trading, and<br className='sm:block hidden'/> exclusive collectibles. If you need more help, feel free to reach out!</div>
                    </div>
                    <Accordion.Root
                        type="single"
                        collapsible
                        className="sm:w-2/3 w-full rounded-md"
                    >
                        {faqs.map((faq, index) => (
                            <Accordion.Item
                                key={index}
                                value={`item-${index}`}
                                className="border-b last:border-b-0 border-gray-200"
                            >
                                <Accordion.Header>
                                    <Accordion.Trigger className="flex justify-between items-center w-full px-4 py-6 text-left sm:text-3xl text-base transition group">
                                        <span>{faq.title}</span>
                                        <ChevronDownIcon
                                            className="w-5 h-5 transition-transform duration-200 ease-in-out text-[#0B1934] group-data-[state=open]:rotate-180"
                                            aria-hidden
                                        />
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="pl-4 sm:pr-28 pr-10 pt-2 pb-6 text-[#68767E] sm:text-base text-sm">
                                    {faq.desc}
                                </Accordion.Content>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>
                </div>
                <div className="w-full border-t border-[#CDCDCD] sm:flex flex-row justify-between py-8 hidden">
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
    )
}

export default page