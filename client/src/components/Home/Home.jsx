/* eslint-disable react/no-unescaped-entities */
import styles from './Home.module.css';

export default function Home() {
    return (
        <main className='main-container'>
            <div className={styles['site-home']}>
                <section className={styles['header-title']}>
                    <h1>It's time to start your adventures!</h1>
                    <p>Integer blandit libero sit amet massa interdum fermentum</p>
                    <p>Veniam, facilis.</p>
                    <button className={styles['button']}>YOUR NEXT JOURNEY</button>
                </section>
            </div> 
        </main>
    );
}