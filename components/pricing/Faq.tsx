import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

const Faq = () => {
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
    <div className="w-full flex justify-center text-white">
      <div className="container max-auto pt-20 pb-14 flex flex-col items-center gap-12">
        <div className="w-full text text-6xl text-center">
          Frequently Asked
          <br /> Questions
        </div>
        <Accordion.Root
          type="single"
          collapsible
          className="w-2/3 rounded-md"
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="border-b last:border-b-0 border-gray-200"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between w-full px-4 py-6 text-left text-3xl transition">
                  <span>{faq.title}</span>
                  <ChevronDownIcon
                    className="w-5 h-5 transition-transform duration-200 ease-in-out"
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="pl-4 pr-28 pt-2 pb-6 text-[#EAEAEC]">
                {faq.desc}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <div className="w-full border-t border-[#CDCDCD] flex flex-row justify-between pt-8">
          <Link href={"/"} className="text-[#99A1A3] text-base">
            galery111@copyright
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
  );
};

export default Faq;
