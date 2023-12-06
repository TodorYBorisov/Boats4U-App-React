import styles from './Footer.module.css';
import { useEffect, useState } from 'react';

export default function Footer() {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const interval = setInterval(() => {
            const newYear = new Date().getFullYear();
            if (newYear !== currentYear) {
                setCurrentYear(newYear);
            }
        }, 1000 * 60 * 60);
        return () => clearInterval(interval);

    }, [currentYear]);

    return (
        <footer className={styles['footer']}>
            <p data-testid='footer'>Copyright &copy; {currentYear} Todor Borisov. All Rights Reserved. <span>Boats4U</span></p>

            <div className={styles['social-media-icons']}>
                <a href="https://github.com/TodorYBorisov/Boats4U-App-React"><i data-testid='github' className="fa-brands fa-square-github"></i></a>
                <a href="#"><i data-testid='linkedin' className="fa-brands fa-linkedin"></i></a>
            </div>
        </footer >
    );
}
