import Head from "next/head";
import { Identify } from "../components/identify";
import { About } from "../components/about";
import styles from "../styles/Home.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tyler Lam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Identify />
        <About />
      </main>
    </div>
  );
}
