import OfferItem from '../Catalog/OfferList/OfferItem/OfferItem';
import * as dataService from '../../services/dataService';
import Loader from '../Loader/Loader';
import styles from './Profile.module.css';
import { useState, useEffect } from 'react';

export default function Profile() {
    document.title = 'Profile';

    const [boats, setBoats] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(boats);

    useEffect(() => {
        setLoading(true);
        dataService.getAllData()
            .then(result => {
                setBoats(result);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(true);
            })
            .finally(()=> setLoading(false));
    }, []);


    return (

        <div className={styles['profile-container']}>

            <div className={styles['profile-data']}>

                <img src="/assets/male.png" alt="" />

                <div className={styles['user-data']}>
                    <p>Username: <span>Toshko</span></p>
                    <p><i className="fa-solid fa-envelope"></i> Email: <span>toshko@abv.bg</span></p>
                    <p><i className="fa-solid fa-phone-volume" ></i> Phone: <span>+359 88 888 888</span></p>
                </div>

            </div>

            <section className={styles['catalog-page']}>

                <h1 className={styles['title-catalog']}>My Boats</h1>

                {loading ?
                    <Loader />
                    : <div className={styles['offersList-main-section']}>
                        {boats.length > 0
                            ? <ul className={styles['offersList-section']}>
                                {boats.map(boat => (
                                    <li key={boat._id}>
                                        <OfferItem
                                            id={boat._id}
                                            imageUrl={boat.imageUrl}
                                            startPoint={boat.startPoint}
                                            date={boat.date}
                                            time={boat.time}
                                            price={boat.price}
                                            model={boat.model}
                                        />
                                    </li>
                                ))}
                            </ul>
                            : <div className={styles['no-boats']}>
                                <h2>No boats!</h2>
                                {/* <h2>Please visit us again later!</h2> */}
                            </div>
                        }
                    </div>}
      
            </section>

        </div>
    );
}