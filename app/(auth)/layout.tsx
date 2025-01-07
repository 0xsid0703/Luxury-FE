import React, { useEffect } from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "mcjs";
    script.src =
      "https://chimpstatic.com/mcjs-connected/js/users/9ae7f4c2cd8fb05a3073a6f81/418afc31df317a39db97f2028.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // Clean up if the component unmounts
    };
  }, []);
  return <div className="w-full bg-mainBackground h-screen">{children}</div>;
};

export default layout;
