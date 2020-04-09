import React from "react";
import Head from "next/head";

export default (props) => (
  <div className="p-4 shadow rounded bg-white">
    <Head>
      <title>Next.js + Preact + Tailwind CSS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>{props.children}</main>
  </div>
);
