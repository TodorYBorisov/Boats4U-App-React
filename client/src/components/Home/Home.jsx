/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

export default function Home() {
    document.title = 'Home';

    return (
        <main className={styles['main-container']}>
            <div className={styles['site-home']}>
                <section className={styles['header-title']}>
                    <h1>It's time to start your adventures!</h1>
                    <p>We invite you to embark on your next adventure with us.</p>
                    <p>Discover the freedom of the open sea, the beauty of the coastline, and the joy of yacht living.</p>
                    <Link to='/boats'><button data-testid='linkBoats' className={styles['button']}>YOUR NEXT JOURNEY</button></Link>
                    <Link to='/about'><button data-testid='linkAbout' className={styles['button']}>ABOUT US</button></Link>
                </section>
            </div> 
        </main>
    );
}