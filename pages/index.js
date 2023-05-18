import Head from "next/head";
import styles from "../styles/homePage.module.css";

export default function Caching({ time }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>SSR cache testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>SSR cache testing</h1>
        <p className={styles.card}>{time}</p>
      </main>
    </div>
  );
}

export async function getServerSideProps({res}) {
  res.setHeader("Cache-control","public, max-age=60")
  return { props: {  time: new Date().toISOString() } };
}
