import React from "react";
import Link from "next/link";

import Layout from "../components/Layout";

export default () => (
  <Layout>
    <h1 className="text-purple-500 leading-normal">
      <a href="https://nextjs.org/">Next.js</a> +{" "}
      <a href="https://preactjs.com/">Preact</a> +{" "}
      <a href="https://tailwindcss.com/">Tailwind CSS</a>
    </h1>
    <p className="text-gray-500">
      Get started by editing <code>pages/index.tsx</code>
    </p>
    <Link href="/about">
      <a>About</a>
    </Link>
  </Layout>
);
