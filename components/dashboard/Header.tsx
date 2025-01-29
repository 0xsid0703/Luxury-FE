"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import type { User } from "next-auth";
import { UserAccountNav } from "../common/user-account-nav";
import { useSigninModal } from "@/hooks/use-signin-modal";
import clsx from "clsx";
import { signOut } from "next-auth/react";

interface HeaderProps {
  user: Pick<User, "name" | "image" | "email"> | undefined;
}

const Header = ({ user }: HeaderProps) => {
  const signInModal = useSigninModal();

  const [toggle, setToggle] = useState(true)
  return (
    <div className={clsx("fixed bg-transparent w-full z-10", toggle ? "h-fit" : 'h-full')}>
      <div className={clsx("bg-[#F7F7F7] shadow-lg", toggle ? "h-fit" : 'h-full')}>
        <div className="mx-auto px-6 py-1 sm:flex hidden">
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
            {!user ? (
              <div className="flex gap-2">
                <Button
                  asChild
                  className="bg-transparent text-primary text-base px-4 py-2 font-bold w-36 rounded-md shadow-none hover:shadow-[0_0_0_1px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all"
                >
                  <Link href="/login">Log In</Link>
                </Button>

                <Button
                  asChild
                  className="bg-yellowColor hover:bg-yellowColor shadow-none text-primary text-base px-4 py-2 font-bold w-36 rounded-md hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all" onClick={signInModal.onOpen}
                >
                  <div>Sign Up</div>
                </Button>
                {/* <GoogleLogin shape="circle" size="medium" text="continue_with" onSuccess={googleLoginSuccessful} /> */}
              </div>) : null}
            {user ? (
              <UserAccountNav
                user={user}
              />
            ) : null}
          </div>
        </div>
        <div className="mx-auto px-6 py-1 sm:hidden flex flex-col h-full">
          <div className="flex flex-row justify-between items-center py-2">
            <Link href="/">
              <Image
                src={"/Logo.svg"}
                width={400}
                height={200}
                alt=""
                className="w-20 h-10"
              />
            </Link>
            <div className="flex gap-5 items-center">
              {
                !user ? <Button
                  asChild
                  className="bg-[#0B1934] hover:bg-[#0B1934] shadow-none text-white text-base px-3 py-2 font-bold rounded-full hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all" onClick={signInModal.onOpen}
                >
                  <div>Sign Up</div>
                </Button> : <Button
                  asChild
                  className="bg-[#0B1934] hover:bg-[#0B1934] shadow-none text-white text-base px-3 py-2 font-bold rounded-full hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all" onClick={() => {
                    signOut().catch((error) => {
                      console.error("Error during sign out:", error);
                    })
                  }}
                >
                  <div>Sign Out</div>
                </Button>
              }
              {
                toggle ? <Image src={"/menu-open.png"} width={24} height={24} alt="" onClick={() => setToggle(false)} /> : <Image src={"/menu-close.png"} width={24} height={24} alt="" onClick={() => setToggle(true)} />
              }
            </div>
          </div>
          {!toggle && <div className="sm:hidden w-full h-full bg-[#F7F7F7] flex flex-1 flex-col justify-between">
            <div className="flex flex-col text-black">
              <Link href={"/"} className="text-2xl font-light py-3">How It Works</Link>
              <Link href={"/"} className="text-2xl font-light py-3">Private Sales</Link>
              <Link href={"/"} className="text-2xl font-light py-3">Vault Partner</Link>
              <Link href={"/"} className="text-2xl font-light py-3">FAQ</Link>
            </div>
            <div className="flex flex-col gap-16 pb-6">
              <div className="flex flex-col gap-6 px-6">
                <div className="flex flex-col gap-2">
                  <div className="text-base text-[#0B1934]">
                    Join Or Log In
                  </div>
                  <div className="text-sm text-[#2A2B39]">
                    Explore exclusive art & collectibles. Access your account or start your journey today
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {
                    !user ? <Button
                      asChild
                      className="bg-[#0B1934] hover:bg-[#0B1934] shadow-none text-white text-base px-3 py-2 font-bold rounded-full hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all" onClick={signInModal.onOpen}
                    >
                      <div>Sign Up</div>
                    </Button> : <Button
                      asChild
                      className="bg-[#0B1934] hover:bg-[#0B1934] shadow-none text-white text-base px-3 py-2 font-bold rounded-full hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all" onClick={()=> signOut()}
                    >
                      <div>Sign Out</div>
                    </Button>
                  }
                  {
                    !user && <Button
                      asChild
                      className="bg-white hover:bg-white shadow-none text-[#0B1934] text-base px-3 py-2 font-bold rounded-full hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all"
                    >
                      <Link href="/login">Log In</Link>
                    </Button>
                  }
                </div>
              </div>
              <div className="w-full text-[#8C99A1] text-center text-xs">GO FUND ART @copyright</div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
