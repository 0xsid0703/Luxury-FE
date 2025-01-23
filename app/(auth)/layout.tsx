// import { getCurrentUser } from "@/lib/auth";
// import { redirect } from "next/navigation";
import React from "react";

const layout = async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // const user = await getCurrentUser();
  // if (!user) {
  //   redirect('/login')
  // }
  return (
    <div className="w-full bg-mainBackground h-screen">{children}</div>
  );
};

export default layout;
