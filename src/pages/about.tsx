import React from "react";
import Link from "next/link";

import Layout from "../components/Layout";

export default () => (
  <Layout>
    <h1 className="text-purple-500 leading-normal">About</h1>
    <p className="text-gray-500">This is the about page.</p>
    <Link href="/">
      <a>back</a>
    </Link>
  </Layout>
);
