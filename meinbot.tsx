import Head from 'next/head';
import styles from '../styles/meinbot.module.css';
import * as React from 'react';

export default function meinbots(){
    return(
        <div className={styles.back}>
            <Head>
                <title>MeinBot</title>
                <meta name="description" content="MeinBot" />
                <link rel="icon" href="https://v2.cdn.minigameking.net/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                <h1 className={styles.title}>MeinBot</h1>
                <p>MeinBot is an inteligent ai that can do lots of things relevent to pvp in Minecraft.</p>
                <a className={styles.download} href='https://github.com/meindertmoos/meinbot'>
                    DOWNLOAD
                </a>
                <h1 id="features">Features</h1>
                <p>MeinBot has an varity of features, all listed here</p>
                <ul>        
                <li>Monitoring: The bot now includes monitoring via webserver with view and inventory managment.</li>
                <li>Guarding: Defend a spefic block from all mobs</li>
                <li>Exellent pvp: It is very good a pvping other players from 1.8 pvp to 1.18 pvp. Using the mineflayer-pvp package</li>
                <li>Automatic Gapples: When its health is under 10 it will attemp to eat golden apples until its health is higher again. Using the mineflayer-autoeat package</li>
                <li>Automatic Armor Equipment: Automaticly equip the best armor from the bot. Using the mineflayer-armor-manager package</li>
                <li>Very good ai pathfinding: MeinBot is great at finding its way in a minecraft world. Using the mineflayer-navigation, mineflayer-scaffold and mineflayer-pathfinding packages</li>
                </ul>
                <h1 id="installation">Installation</h1>
                <p>To install MeinBot simply clone or download the files in this repo and run the installer.</p>
                <pre><code className="lang-sh"> ./installer.<span className="hljs-keyword">sh</span>
                </code></pre>
                <p>NOTE: If the installer cant finish, simply install nodejs and run npm i.</p>
                <h1 id="requirements">Requirements</h1>
                <p>MeinBot is build on mineflayer and needs nodejs and npm to function</p>
                <h1 id="starting-the-bot">Starting the bot</h1>
                <p>To start the bot make sure you have everything installed and have run npm install, then run &quot;node meinbot.js [host] [port] [version] [name] [password]&quot;
                This bot can run without a password, however it can then only join cracked (Offline mode) servers
                Default value for the bots name is MeinBot</p>
                <h1 id="important">IMPORTANT</h1>
                <p>This bot is entirely open source and does not make money of users in any way. Feel free to share and edit the code to your liking</p>
                <h1 id="commands-">Commands:</h1>
                <ul>
                <li>meinbot: Show a list of commands in game</li>
                <li>meinbot fight: The bot wil attempt to fight the person that send the message in chat</li>
                <li>meinbot guard: The bot wil walk to your position in game and stand there until mobs come. When the mobs are defeated it wil return to its position until stopped</li>
                <li>meinbot stop: Stop the bot if it is fighting or guarding</li>
                <li>meinbot dc: If you changed the variable in the file to your name then it will stop the main node process and disconnect</li>
                <li>meinbot come: Comes to your position, if its to high or to low it can error out if it doenst have blocks to build</li>
                <li>meinbot eat: Makes the bot eat an golden apple if in inventory</li>
                </ul>
                <h1 id="note">NOTE</h1>
                <p>This is and side project of mine i made it entirely for fun. Dont expect much from it, tho it is suprisingly good at fighting.
                And i know that its not the best code in the world but it does ok.&#39;</p>
                <ul>
                <li>HOW LONG DID IT TAKE ME TO CREATE THIS THING? Not long. Today at this push its 50 days ago that i started MeinBot.</li>
                <li>WIL I BE CONSTANTLY UPDATING THIS? I will try my best, but i dont know what features to add and i also dont have a lot of time. I hope to not make this depreciated.</li>
                <li>CAN I REPORT BUGS/ASK FOR FEATURES? Im not sure if much people are going to but sure!</li>
                <li>HOW CAN I ACCESS THE &quot;MONITORING&quot;? At startup it usually says started web server and inventory server on localhost:PORT. Default ports are 3007 for the pov and 6001 for the inventory viewer.</li>
                </ul>
                </div>
        </main>
        <div className={styles.footer1}>
                <a
                    href="https://"
                    target="_blank"
                    rel="noopener noreferrer" />
                &copy;2020-{new Date().getFullYear()} MiniGameKing
            </div>
    </div>
    )
}