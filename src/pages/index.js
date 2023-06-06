import Head from "next/head";
import Header from "@/component/Header";
import Banner from "@/component/Banner";
import Productfeed from "@/component/Productfeed";
import Product from "@/component/Product";
export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <main className="mx-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />
        {/* Productfeed */}
        <Productfeed products={products} />
        
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return { props: { products, } };
  //https://fakestoreapi.com/products
}
