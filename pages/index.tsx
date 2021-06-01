import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tyler Lam</title>
      </Head>
      <main className={styles.main}>
        <h1>Tyler Lam</h1>
      </main>
    </div>
  );
}
