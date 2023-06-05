import DefaultLayout from "layouts/DefaultLayout";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "styles/pages/Home.module.scss";

export default function Home() {
  const DynamicContent = dynamic(() => import("components/Content/Content"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>TeeRex Store</title>
        <meta name="title" content="TeeRex Store" />
        <meta name="description" content="Buy T-Shirts Online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicContent />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
