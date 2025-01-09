'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'

const Header = () => {

  const googleLoginSuccessful = (response: CredentialResponse) => {
    if (response.credential !== undefined) {
      console.log(response.credential)
    }
  }
  return (
    <div className="fixed bg-transparent w-full z-10">
      <div className="m-5 rounded-md bg-[#F7F7F7] shadow-lg">
        <div className="mx-auto px-6 py-1 flex">
          <div className="w-1/2 flex justify-between items-center">
            <Link href="/">
              <Image
                src={"/Logo.svg"}
                width={400}
                height={200}
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
                className="bg-transparent text-primary text-base px-4 py-2 font-bold w-36 rounded-md shadow-none hover:shadow-[0_0_0_1px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all"
              >
                <Link href="/sign-up">Log In</Link>
              </Button>

              <Button
                asChild
                className="bg-yellowColor hover:bg-yellowColor shadow-none text-primary text-base px-4 py-2 font-bold w-36 rounded-md hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all"
              >
                <Link href="/sign-up">Sign Up</Link>
              </Button>
              {/* <GoogleLogin shape="circle" size="medium" text="continue_with" onSuccess={googleLoginSuccessful} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
