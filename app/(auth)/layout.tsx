import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="w-full bg-mainBackground h-screen">{children}</div>;
};

export default layout;
