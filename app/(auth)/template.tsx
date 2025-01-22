"use client";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import React, { PropsWithChildren } from "react";

const RootTemplate = ({ children }: PropsWithChildren) => {
    return <>
        <MainComponent />
        {children}

    </>;
};

export default RootTemplate;
const MainComponent = async() => {
    const user = await getCurrentUser();
    console.log({user});
    if(!user) {
        redirect("/login");
    }
    return <></>;
};