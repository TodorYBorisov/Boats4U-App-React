import Carousel from '../Carousel/Carousel';
import styles from './Team.module.css';

export default function Team() {
    return (
        <section className={styles['team-description']}>
            <div className={styles['team-description-wrapper']}>
                <h3>A few of our exceptional captains.</h3>
                <p>Experienced professionals with a demonstrated history of success and expertise in their field.</p>
                <Carousel />
            </div>
        </section>
    );
}