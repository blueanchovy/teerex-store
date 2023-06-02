import DefaultLayout from "layouts/DefaultLayout";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "styles/pages/Home.module.scss";

export default function Home({ data }) {
  console.log(data);

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
      <DynamicContent cardsData={data} />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export async function getServerSideProps(context) {
  try {
    const response = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: { data: null },
    };
  }
}
