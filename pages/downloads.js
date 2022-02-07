import Head from 'next/head';
import styles from '../styles/downloads.module.css';
import * as React from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Downloads</title>
        <meta name="description" content="The Official MiniGameKing website" />
        <link rel="icon" href="https://v2.cdn.minigameking.net/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Downloads
        </h1>
        <p className={styles.description}>
          My list of downloads
        </p>
        <a className={styles.description} href='https://minigameking.net/ultraviolet'>
          UltraViolet Revamped R1.2
        </a>
        <a className={styles.description} href='https://minigameking.net/meinbot'>
          MeinBot
        </a>
      </main>
      <div className={styles.footer1}>
        <a
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
        />
           &copy;2020-{new Date().getFullYear()} MiniGameKing
      </div>
    </div>
  )
}
