import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="fixed bg-transparent w-full z-10">
      <div className="m-5 rounded-md bg-[#F7F7F7] shadow-lg">
        <div className="mx-auto px-6 py-1 flex">
          <div className="w-1/2 flex justify-between items-center">
            <Link href="/">
              <Image
                src={"/Logo.svg"}
                width={200}
                height={100}
                alt=""
                className="w-[120px] h-[60px]"
              />
            </Link>
            <div className="flex flex-row gap-8  items-center text-sm">
              <Link className="" href={"/how-it-works"}>
                How It Works
              </Link>
              <Link className="" href={"/private-sales"}>
                Private Sales
              </Link>
              <Link className="" href={"/vault-partner"}>
                Vault Partner
              </Link>
              <Link className="" href={"/faq"}>
                FAQ
              </Link>
            </div>
          </div>
          <div className="flex justify-end w-1/2 items-center">
            <div className="flex gap-2">
              <Button
                asChild
                className="bg-transparent hover:bg-gray-800 hover:text-white text-primary text-base px-4 py-2 font-bold w-36 rounded-md shadow-none transition duration-300"
              >
                <Link href="/sign-up">Log In</Link>
              </Button>

              <Button
                asChild
                className="bg-yellowColor shadow-none hover:bg-gray-800 hover:text-white text-primary text-base px-4 py-2 font-bold w-36 rounded-md transition duration-300"
              >
                <Link href="/sign-up">Sign Up</Link>
              </Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
