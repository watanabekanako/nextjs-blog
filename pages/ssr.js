import Head from "next/head";
import Layout from "../components/layout";

export default function Page({ data }) {
  return (
    <Layout>
      <Head>
        <title>Server-side Rendering</title>
      </Head>
      <p>{data.current}</p>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: { data: { current: new Date().toLocaleString() } } };
}
