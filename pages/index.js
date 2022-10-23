import Head from 'next/head'
import Axios from "axios";

export const getStaticProps = async () => {
  try {
    const res = await Axios.get("https://fakestoreapi.com/products");
    return {
      props: { data: res.data }
    }

  } catch (error) {
    return error
  }

}

const SLIDE_COUNT = 10;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home({ data }) {


  return (
    <>
      <Head>
        <title>Practice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>





    </>
  )
}
