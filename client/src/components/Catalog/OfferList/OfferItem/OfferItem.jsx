/* eslint-disable react/prop-types */


// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './OfferItem.module.css';

export default function OfferItem({
    id,
    imageUrl,
    model,
    startPoint,
    date,
    time,
    price
}) {
    return (
        <div className={styles['card-container']} >
            <div className={styles['card']}>
                <img className={styles['card-img-top']} src={imageUrl} alt={model} />
                <div className={styles['card-body']}>
                    <h5 className={styles['card-title']}><i className="fa-solid fa-ship"></i> Harbour: <span>{startPoint}</span></h5>
                    <h5 className={styles['card-info']}><i className="far fa-calendar-alt"></i> Date: <span>{date}</span></h5>
                    <h5 className={styles['card-info']}><i className="far fa-clock"></i> Time: <span>{time}</span></h5>
                    <h5 className={styles['card-info']}><i className="fas fa-hand-holding-usd"></i> Price: <span>{price}</span> EUR</h5>
                </div>
                <div className={styles['card-footer']}>
                    < Link to={`/details/${id}`} className={styles['btn-primary']}>Read More</Link>
                </div>
            </div>
        </div>
    );
}