"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import * as Icons from "@/components/ui/icons";

import { Modal } from "./Modal";
import { useSigninModal } from "@/hooks/use-signin-modal";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { toast } from "@/hooks/use-toast";

export const SignInModal = () => {
  const [isLogin, setIsLogin] = useState(true)
  const signInModal = useSigninModal();
  const [signInClicked, setSignInClicked] = useState(false);
  const [email, setEmail] = useState("");
  const searchParams = useSearchParams();
  async function onSubmit() {
    const signInResult = await signIn("email", {
      email: email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get("from") ?? `/`,
    }).catch((error) => {
      console.error("Error during sign in:", error);
    });

    if (!signInResult?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too.",
    });
  }
  return (
    <Modal showModal={signInModal.isOpen} setShowModal={signInModal.onClose}>
      <div className="sm:w-[1000px] w-full flex flex-row ">
        <div className="sm:w-1/2 w-full h-full sm:block hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/subscribe.png)" }}></div>
        <div className="sm:w-1/2 w-full flex flex-col sm:pt-14 sm:pb-20 sm:px-20 px-6 py-4 items-center gap-7 relative">
          <div className="sm:block hidden absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#8C99A1] text-sm">© GO FUND ART</div>
          <Image src="/logo.png" width={100} height={50} alt="" className="w-[100px] h-[50px]" />
          {isLogin ? <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-3 items-center">
              <div className="text-2xl">Welcome Back!</div>
              <div className="text-sm text-[#8C99A1] text-center">Log in to access exclusive collectibles, manage your portfolio, and explore upcoming sales.</div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm">Log in with email</span>
                <input type="email" placeholder="Email" className="border border-[#DDE2EA] outline-none rounded-lg px-6 py-3 text-sm" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 w-full items-center">
                <Button className='bg-[#A88573] w-full rounded-xl py-6 text-white hover:bg-[#A88573] hover:text-white hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all text-base font-medium flex flex-row justify-center gap-2' onClick={onSubmit}><span>Continue</span><ArrowRight color='#fff' size={16} /></Button>
                <div className="text-sm text-[#8C99A1] text-center">OR</div>
                <Button
                  variant="default"
                  disabled={signInClicked}
                  className="w-full rounded-xl border border-[#8C99A1] text-[#0B1934] py-6 bg-white hover:bg-white hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all"
                  onClick={() => {
                    setSignInClicked(true);
                    signIn("google", { redirect: false })
                      .then(() =>
                        setTimeout(() => {
                          signInModal.onClose();
                        }, 1000),
                      )
                      .catch((error) => {
                        console.error("signUp failed:", error);
                      });
                  }}
                >
                  {signInClicked ? (
                    <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Icons.Google className="mr-2 h-4 w-4" />
                  )}{" "}
                  {"Continue with Google"}
                </Button>
                <div className="mt-6 text-sm flex flex-row items-center gap-2">
                  <span className="text-[#8C99A1]">Don't have an account?</span><span className="text-[#A88573] cursor-pointer hover:underline" onClick={() => setIsLogin(false)}> Sign Up</span>
                </div>
              </div>
            </div>
          </div> : <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-3 items-center">
              <div className="text-2xl">Join the {" "} <span className="text-[#A88573]">Exclusive Collectors' Circle</span></div>
              <div className="text-sm text-[#8C99A1] text-center">Create an account to access limited-edition luxury collectibles, receive exclusive updates, and manage your investments</div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm">Sign Up with email</span>
                <input type="email" placeholder="Email" className="border border-[#DDE2EA] outline-none rounded-lg px-6 py-3 text-sm" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 w-full items-center">
                <Button className='bg-[#A88573] w-full rounded-xl py-6 text-white hover:bg-[#A88573] hover:text-white hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all text-base font-medium flex flex-row justify-center gap-2' onClick={onSubmit}><span>Continue</span><ArrowRight color='#fff' size={16} /></Button>
                <div className="text-sm text-[#8C99A1] text-center">OR</div>
                <Button
                  variant="default"
                  disabled={signInClicked}
                  className="w-full rounded-xl border border-[#8C99A1] text-[#0B1934] py-6 bg-white hover:bg-white hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all"
                  onClick={() => {
                    setSignInClicked(true);
                    signIn("google", { redirect: false })
                      .then(() =>
                        setTimeout(() => {
                          signInModal.onClose();
                        }, 1000),
                      )
                      .catch((error) => {
                        console.error("signUp failed:", error);
                      });
                  }}
                >
                  {signInClicked ? (
                    <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Icons.Google className="mr-2 h-4 w-4" />
                  )}{" "}
                  {"Continue with Google"}
                </Button>
                <div className="mt-6 text-sm flex flex-row items-center gap-2">
                  <span className="text-[#8C99A1]">Already have an account?</span><span className="text-[#A88573] cursor-pointer hover:underline" onClick={() => setIsLogin(true)}>Log In</span>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </Modal>
  );
};
