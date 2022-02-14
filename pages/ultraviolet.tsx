import Head from "next/head";
import * as React from "react";
import styles from '../styles/ultraviolet.module.css';

export default function Home(){
    return(
        <div className={styles.container}>
      <Head>
        <title>UltraViolet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="The Official MiniGameKing website" />
        <link rel="icon" href="https://v2.cdn.minigameking.net/favicon.ico" />
      </Head>
      <div className={styles.back}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          UltraViolet Revamp
        </h1>
        <p className={styles.description}>
            A purple themed 1.8.9 PVP Pack
        </p>
        <p className={styles.new}>
            NEW: COMPLETE RENEW OF THE PACK.
        </p>
        <p className={styles.description}>Download directly from our servers:</p>
        <a className={styles.download} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/ultraviolet_revamp_R2.0.zip" download>UltraViolet Revamp R2.0</a>
        <p className={styles.description}>R2.0 SHA256: </p><code className={styles.code}>2f830559a619e228e085ab5293b1142d8f1dddae79599bbe187e57ebef2ceddd</code>
        <a className={styles.download} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/sounds">Listen to the sounds of the pack here</a>
        <p className={styles.description}>CL R2.0: Complete remake of the original revamp, with a  huge fps increasement over previous revisions</p>
      </main>
      <footer className={styles.footer}>
        <a>
          &copy;2020-{new Date().getFullYear()} MiniGameKing
        </a>
      </footer>
    </div>
    </div>
    )
}