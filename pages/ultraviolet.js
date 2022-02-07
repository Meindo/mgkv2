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
        <p className={styles.description}>Download directly from our servers:</p>
        <a className={styles.download} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/ultraviolet_revamp_R1.2.zip" download>UltraViolet Revamp R1.2</a>
        <p className={styles.description}>R1.2 SHA256: </p><code className={styles.code}>4f96cd8c127164da0f51598741a902c347d7d73a060722e97ebe00d3dbfbe60d</code>
        <p className={styles.description}>Gallery:</p>
        <div>
        <a className={styles.gallery} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_1.png">
        <img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_1.png" alt="IMG1" width="426" height="240"/>
        </a>
        <a className={styles.gallery} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_2.png">
        <img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_2.png" alt="IMG2" width="426" height="240"/>
        </a>
        <a className={styles.gallery} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_3.png">
        <img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_3.png" alt="IMG3" width="426" height="240"/>
        </a>
        <a className={styles.gallery} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_4.png">
        <img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_4.png" alt="IMG4" width="426" height="240"/>
        </a>
        <a className={styles.galleryCenter} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_5.png">
        <img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_5.png" alt="IMG5" width="426" height="240"/>
        </a>
        <a className={styles.gallery} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_6.png">
        <img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_6.png" alt="IMG6" width="426" height="240"/>
        </a>
        <a className={styles.galleryCenter} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_7.png">
        <img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_7.png" alt="IMG7" width="426" height="240"/>
        </a>
        <a className={styles.galleryCenter} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_8.png">
        <img src="https://v2.cdn.minigameking.net/ultraviolet_revamp/bw_8.png" alt="IMG8" width="426" height="240"/>
        </a>
        </div>
        <a className={styles.download} href="https://v2.cdn.minigameking.net/ultraviolet_revamp/sounds">Listen to the sounds of the pack here</a>
        <p className={styles.description}>CL R1.2: Minor updates</p>
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