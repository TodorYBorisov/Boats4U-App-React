
import styles from './Team.module.css';

export default function Team() {

    return (
        <section className={styles['team-description']}>
            <div className={styles['team-description-wrapper']}>
                <h3>A few of our exceptional captains.</h3>
                <p>Experienced professionals with a demonstrated history of success and expertise in their field.</p>
                <ul>
                    <li>
                        <img src="/assets/captain1.jpg" alt="pic" />
                        <p>Alessandro Lombardi</p>
                        <p>Cortina, Italy</p>
                    </li>
                    <li>
                        <img src="/assets/captain2.jpg" alt="pic" />
                        <p>Jean Pierro</p>
                        <p>Chamonix-Mont-Blanc, France</p>
                    </li>
                    <li>
                        <img src="/assets/captain3.jpg" alt="pic" />
                        <p>Laura Brown</p>
                        <p>London, United Kingdom</p>
                    </li>
                    <li>
                        <img src="/assets/captain4.jpg" alt="pic" />
                        <p>Robert Peterson</p>
                        <p>Kitzbuhel, Austria</p>
                    </li>
                    <li>
                        <img src="/assets/captain5.jpg" alt="pic" />
                        <p>Reneta Milton</p>
                        <p>Lisboa, Portugal</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}