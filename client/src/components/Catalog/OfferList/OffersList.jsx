
import OfferItem from './OffersItem/OfferItem';
import styles from './OffersList.module.css';


export default function OffersList() {
    return (

        <div className={styles['offersList-main-section']}>
            <section className={styles['offersList-section']} >
                {/* <!-- If there are boats in the database display each of them --> */}
                <OfferItem/>
                
                {/* <div className={styles['card-container']} >
                    <div className={styles['card']}>
                        <img className={styles['card-img-top']} src="/assets/boat1.jpg" alt="yacht" />
                        <div className={styles['card-body']}>
                            <h5 className={styles['card-title']} ><i className="fa-solid fa-ship"></i> Harbour: <span>Chania</span></h5>
                            <h5 className={styles['card-info']}><i className="far fa-calendar-alt"></i> Date: <span>12/12/2023</span></h5>
                            <h5 className={styles['card-info']}><i className="far fa-clock"></i> Time: <span>10:30</span></h5>
                            <h5 className={styles['card-info']}><i className="fas fa-hand-holding-usd"></i> Price: <span>2000</span> EUR</h5>
                        </div>
                        <div className={styles['card-footer']}>
                            <a href="" className={styles['btn-primary']}>Read More</a>
                        </div>
                    </div>
                </div> */}
                

                {/* <div className={styles['no-boats']}>
                <h2>Unfortunately, we currently have no boats available for you right now...</h2>
                <h2>Please visit us again later!</h2>
                </div> */}

            </section>
        </div>
    );
}