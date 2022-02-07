import Head from 'next/head';
import styles from '../styles/meinbot.module.css';
import * as React from 'react';

export default function Home(){
    return(
        <div className={styles.back}>
      <Head>
      <title>MeinBot</title>
        <meta name="description" content="MeinBot"/>
        <link rel="icon" href="https://v2.cdn.minigameking.net/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          MeinBot
        </h1>
        <p className={styles.description}>
            An versatile minecraft pvp bot written in javascript
        </p>
        <a className={styles.description} href='https://github.com/meindertmoos/meinbot'>
          Github Link
        </a>
        <p className={styles.description}>To install simply run the installer.sh script and follow the instructions</p>
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