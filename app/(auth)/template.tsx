"use client";

import { getCurrentUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren, useEffect, useState } from "react";

const RootTemplate = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        router.push("/login"); // Redirect if user is not logged in
      } else {
        setUser(currentUser); // Save user state if logged in
      }
    };

    checkUser();
  }, [router]);

  if (!user) {
    return null; // Render nothing while checking authentication
  }

  return <>{children}</>;
};

export default RootTemplate;
