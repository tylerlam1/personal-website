import Head from "next/head";
import { Identify } from "../components/identify";
import { About } from "../components/about";
import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tyler Lam</title>
      </Head>
      <main className={styles.main}>
        <Identify />
        <About />
      </main>
    </div>
  );
}
