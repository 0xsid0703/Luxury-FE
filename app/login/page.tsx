"use client"
import React, { useState } from "react";
import * as Icons from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSigninModal } from "@/hooks/use-signin-modal";
import { signIn } from "next-auth/react";
import { toast } from "@/hooks/use-toast";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const signInModal = useSigninModal();
  const [signInClicked, setSignInClicked] = useState(false);
  const [email, setEmail] = useState("");
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit() {
    setIsLoading(true);
    const signInResult = await signIn("email", {
      email: email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get("from") ?? `/`,
    }).catch((error) => {
      console.error("Error during sign in:", error);
    });
    setIsLoading(false);
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
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[#F9F7F6]">
      <div className="container mx-auto sm:pt-36 pt-20 sm:px-0 px-3 w-fit h-full relative flex flex-col gap-5 items-center">
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#8C99A1] text-sm">© GO FUND ART</div>
        <Image src="/logo.png" width={100} height={50} alt="" className="w-[100px] h-[50px]" />
        <div className="flex flex-col items-center gap-12 justify-center bg-white sm:py-12 sm:px-20 py-6 px-8 rounded-2xl max-w-lg">
          <div className="flex flex-col gap-[14px] items-center">
            <div className="sm:text-[40px] text-[36px] text-[#0B1934] leading-10 text-center">Welcome Back!</div>
            <div className="text-sm text-[#8C99A1] text-center">Log in to access exclusive collectibles, manage your portfolio, and explore upcoming sales.</div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-1 w-full">
              <span className="text-sm">Log in with email</span>
              <input type="email" placeholder="Email" className="border border-[#DDE2EA] outline-none rounded-lg px-6 py-3 text-sm" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2 w-full items-center">
              <Button className='bg-[#A88573] w-full rounded-xl py-6 text-white hover:bg-[#A88573] hover:text-white hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all text-base font-medium flex flex-row justify-center gap-2' onClick={onSubmit}>
                {isLoading && (
                  <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                )}<span>Continue</span><ArrowRight color='#fff' size={16} />
              </Button>
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
                <span className="text-[#8C99A1]">Don't have an account?</span><Link href={'/signup'} className="text-[#A88573] font-semibold cursor-pointer hover:underline"> Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center sm:px-0 px-6">
          <Image
            src="/signin-logo.svg"
            className="mx-auto"
            width="64"
            height="64"
            alt=""
          />
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            {"Welcome Back"}
          </h1>
          <p className="text-sm text-muted-foreground text-white">
            {"Sign in to your account"}
          </p>
        </div>
        <UserAuthForm />
      </div> */}
    </div>
  );
}
