import Head from "next/head";
import styles from "../styles/homePage.module.css";

export default function Caching({ time }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>SSR cache testing</title>
      </Head>
      <main>
        <h1 className={styles.heading}>SSR cache testing</h1>
        <p className={styles.card}>{time}</p>
      </main>
    </div>
  );
}

export async function getServerSideProps({res}) {
  res.setHeader("cache-control", "public, max-age=10");
  
  return { props: {  time: new Date().toISOString() } };
}
