/* eslint-disable react/no-unescaped-entities */
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (

        <section className={styles['not-found']}>
            <div className={styles['not-found-home']} >
                <h2>404</h2>
                <h2>Page Not Found</h2>
                <p>The Page you are looking for doesn't exist or another error occurred, go to </p>
                <button className={styles['button']}><Link to={'/'}>HOME</Link></button>
            </div>
        </section>
    );
}