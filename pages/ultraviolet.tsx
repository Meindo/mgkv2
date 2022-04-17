import Head from "next/head";
import * as React from "react";
import styles from '../styles/ultraviolet.module.css';

export default function Home(){
    return(
        <div className={styles.container}>
      <Head>
        <title>UltraViolet R2.1</title>
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
            NEW IN V2: COMPLETE RENEW OF THE PACK.
        </p>
        <p className={styles.description}>Download directly from our servers:</p>
        <a className={styles.download} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/ultraviolet_revamp_R2.1.zip" download>UltraViolet Revamp R2.1</a>
        <p className={styles.description}>R2.1 SHA256: </p><code className={styles.code}>e7206f6d92e9bb397fe1e434a5819f6b60761cb74174a8934e8318c94bc405cb</code>
        <a className={styles.download} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/sounds">Listen to the sounds of the pack here</a>
        <p className={styles.description}>CL R2.1: Minor updates and performance enhancements</p>
        <p className={styles.description}>Made by MeindoMC</p>
        <div>
        <a className={styles.gallery} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw2_1.png">
          <img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw2_1.png" alt="IMG1" width="426" height="240"/>
        </a>
        <a className={styles.gallery} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw2_2.png">
          <img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw2_2.png" alt="IMG2" width="426" height="240"/>
        </a>
        <a className={styles.gallery} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw2_3.png">
          <img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw2_3.png" alt="IMG3" width="426" height="240"/>
        </a>
        <a className={styles.gallery} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw2_4.png">
        < img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw2_4.png" alt="IMG4" width="426" height="240"/>
        </a>
        <a className={styles.galleryCenter} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw2_5.png">
          <img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw2_5.png" alt="IMG5" width="426" height="240"/>
        </a>
        <a className={styles.gallery} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw2_6.png">
          <img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw2_6.png" alt="IMG6" width="426" height="240"/>
        </a>
        </div>
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