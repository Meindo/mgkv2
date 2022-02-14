import Head from 'next/head'
import styles from '../styles/Home.module.css'
import * as React from 'react';

export default function Home() {
  const bodyCont = React.useRef(null);
  return (
    <div className={styles.container}>
    <Head>
      <title>MiniGameKing</title>
      <meta name="description" content="The Official MiniGameKing website" />
      <link rel="icon" href="https://v2.cdn.minigameking.net/favicon.ico" />
    </Head>
    <main className={styles.main} ref={bodyCont}>
      <h1 className={styles.title}>
        My Projects
    </h1>
      <p className={styles.description}>
        By MiniGameKing
      </p>
      <div className={styles.grid}>
        <a href="./downloads.html" className={styles.card}>
          <h2>Downloads &rarr;</h2>
          <p>Here you can find all downloads</p>
        </a>
        <a href="./ultraviolet.html" className={styles.card}>
          <h2>UltraViolet Revamp &rarr;</h2>
          <p>The popular 1.8.9 pvp pack UltraViolet made better</p>
        </a>
        <a href="./meinbot.html" className={styles.card}>
          <h2>MeinBot &rarr;</h2>
          <p>An versatile minecraft pvp bot written in javascript</p>
        </a>
        <a href="./about.html" className={styles.card}>
          <h2>About &rarr;</h2>
          <p>About me</p>
        </a>
      </div>
    </main>
    <footer className={styles.footer}>
      <a
        href="https://"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy;2020-{new Date().getFullYear()} MiniGameKing
      </a>
    </footer>
  </div>
  )
}
