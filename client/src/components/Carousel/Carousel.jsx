import styles from './Carousel.module.css';


export default function Carousel() {
    return (

        <div className={styles['container']}>
            <div className={styles['carousel']}>
                <div className={styles['carousel__face']}><p>Alessandro Lombardi</p></div>
                <div className={styles['carousel__face']}><p>Nikolas Ioannou</p></div>
                <div className={styles['carousel__face']}><p>Elena Papadakis</p></div>
                <div className={styles['carousel__face']}><p>Robert Peterson</p></div>
                <div className={styles['carousel__face']}><p>Ariadne Michalopoulos</p></div>
                <div className={styles['carousel__face']}><p>Jonah Merrick</p></div>
                <div className={styles['carousel__face']}><p>Alexandros Kostas</p></div>
                <div className={styles['carousel__face']}><p>Sophia Karas</p></div>
                <div className={styles['carousel__face']}><p>Alexandros Kostas</p></div>
            </div>
        </div>

    );
}
