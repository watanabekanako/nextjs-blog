import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.css";
export default function FirstPost() {
  return (
    <div className={styles.container}>
      <Layout>
        <Head>
          <title>最初の投稿</title>
        </Head>

        <h1>最初の投稿</h1>
        <h2>
          <Link href="/">
            <a>トップページに戻る</a>
          </Link>
        </h2>
      </Layout>
    </div>
  );
}
