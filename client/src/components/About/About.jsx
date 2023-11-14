/* eslint-disable react/no-unescaped-entities */
import Team from '../Team/Team';
import styles from './About.module.css';

export default function About() {
    return (
        <>
            <section className={styles['about-us']}>
                <h1 className={styles['about-h']}>About Us</h1>
                <p>Welcome to <span>Boat4U</span>, your premier destination for luxury yacht and boat rentals. At <span>Boat4U</span>, we're passionate about providing you with an unforgettable maritime experience, combining the thrill of sailing with top-notch service and comfort.</p>
                <p>Our fleet boasts a diverse selection of meticulously maintained yachts and boats, catering to various preferences and group sizes. Whether you're planning a romantic getaway, a family vacation, or a corporate event, we have the perfect vessel for you.</p>
                <p>What sets us apart is our commitment to excellence. Our experienced and professional crew is dedicated to ensuring your safety, comfort, and enjoyment throughout your journey. From the moment you step on board until you disembark, expect personalized service and attention to detail.</p>
                <p><span>Boat4U</span> is not just a boat rental service; we're your partner in creating lasting memories. Explore pristine waters, discover hidden coves, and indulge in the luxury of your private floating paradise.</p>
                <p>We invite you to embark on your next adventure with us. Discover the freedom of the open sea, the beauty of the coastline, and the joy of yacht living. Make your reservation for "Your Next Journey" today.</p>
            </section>
            <Team />
            <div className={styles['location']}>
                <h2>Our main location</h2>
                {/* <div className={styles['map1']}>
                    <iframe width="50%" height="100%" src="https://maps.google.com/maps?q=varna&t=&z=14&ie=UTF8&iwloc=&output=embed"
                        title="Example Website" loading="lazy" />
                </div> */}

                <div className={styles['map2']}>
                    <iframe width="50%" height="100%" src="https://maps.google.com/maps?q=thesalloniki&t=&z=14&ie=UTF8&iwloc=&output=embed"
                        title="Example Website" loading="lazy" />
                </div>
            </div>
        </>
    );
}
