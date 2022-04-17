import Head from 'next/head';
import styles from '../styles/about.module.css';
import * as React from 'react';

export default function about(){
    return(
        <div className={styles.back}>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <title>About</title>
        <meta name="description" content="About"/>
        <link rel="icon" href="https://v2.cdn.minigameking.net/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          About
        </h1>
        <p className={styles.description}>
            Hi! Im Meindert or MeindoMC. This is my place that i use for all my projects.
        </p>
        <p className={styles.description}>
           Im also a Java/Web developer in my free time.
        </p>
        <p className={styles.description}>
            This site is completly rewritten over the original wordpress site.
        </p>
        <p className={styles.description}>Follow me at:</p>
        <a href="https://www.youtube.com/channel/UC48j8iYMWe08md0NFFIyVjw" className="fa fa-youtube"></a>
        <a href="https://twitter.com/MeindertMoos" className="fa fa-twitter"></a>
        <a href="https://www.twitch.tv/meindomc" className="fa fa-twitch"></a>
        <a href="https://www.instagram.com/MeindoMC/" className="fa fa-instagram"></a>
        <p className={styles.description}>For questions mail me at </p><a href='mailto:meindert@minigameking.net'>meindert@minigameking.net</a>
      </main>
      <p className={styles.description}>
            Special thanks to Elith for helping administrating the MC server
        </p>
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