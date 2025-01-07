import Head from "next/head";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>
    <Head>
      <script
        id="mcjs"
        async
        src="https://chimpstatic.com/mcjs-connected/js/users/9ae7f4c2cd8fb05a3073a6f81/418afc31df317a39db97f2028.js"
      ></script>
    </Head>
    <div className="w-full bg-mainBackground h-screen">{children}</div>
  </>;
};

export default layout;
