"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import * as Icons from "@/components/ui/icons";

import { Modal } from "./Modal";
import { useSigninModal } from "@/hooks/use-signin-modal";
import { siteConfig } from "@/lib/magic-link";

export const SignInModal = () => {
  const signInModal = useSigninModal();
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={signInModal.isOpen} setShowModal={signInModal.onClose}>
      <div className="w-full">
        <div className="flex flex-col items-center justify-center space-y-3 border-b bg-black px-4 py-6 pt-8 text-center md:px-16">
          <a href={siteConfig.url}>
            <Image
              src="/signin-logo.svg"
              className="mx-auto"
              width="64"
              height="64"
              alt=""
            />
          </a>
          <h3 className="font-urban text-2xl font-bold text-white">{"Sign Up "}</h3>
          <p className="text-sm text-gray-500">{"only your email and profile picture will be stored."}</p>
        </div>

        <div className="flex flex-col space-y-4 bg-secondary/50 px-4 py-8 md:px-16 text-black">
          <Button
            variant="default"
            disabled={signInClicked}
            className="text-black"
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
            {"Sign Up with Google"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
