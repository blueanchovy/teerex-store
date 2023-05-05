import Content from "components/Content/Content";
import Header from "components/Header/Header";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/pages/Home.module.scss";

export default function Home({ data }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>TeeRex Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content cardsData={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  );
  const data = await response.json();
  return {
    props: { data },
  };
}
