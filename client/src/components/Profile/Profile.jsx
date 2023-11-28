import OfferItem from '../Catalog/OfferList/OfferItem/OfferItem';
import * as dataService from '../../services/dataService';
import Loader from '../Loader/Loader';
import styles from './Profile.module.css';
import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../context/authContext';

export default function Profile() {
    document.title = 'Profile';

    const [boats, setBoats] = useState([]);
    const [loading, setLoading] = useState(false);
    const { auth } = useContext(AuthContext);
    const [reservedBoats, setReservedBoats] = useState([]);

    useEffect(() => {
        setLoading(true);
        dataService.getMyBoats(auth._id)
            .then(result => {
                setBoats(result);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(true);
            })
            .finally(() => setLoading(false));

    }, [auth._id]);

    useEffect(() => {
        async function filteredBoats() {
            try {
                const boats = await dataService.getAllData();
                const bookings = await dataService.getAllBookings();
               
                const userBookings = bookings.filter(booking => booking.boatId === auth._id);
                
                const boatIds = userBookings.map(booking => booking.userId);

                const filtered = boats.filter(boat =>boatIds.includes(boat._id));

                setReservedBoats(filtered);
            } catch (error) {
                console.log(error);
            }
        }

        filteredBoats();
    }, [auth._id]);

    const genderImage = `/assets/${auth.gender}.png`;

    return (

        <div className={styles['profile-container']}>

            <div className={styles['profile-data']}>

                <img src={genderImage} alt={auth.gender} />

                <div className={styles['user-data']}>
                    <p>Username: <span>{auth.username}</span></p>
                    <p><i className="fa-solid fa-envelope"></i> Email: <span>{auth.email}</span></p>
                    <p><i className="fa-solid fa-phone-volume" ></i> Phone: <span>{auth.phone}</span></p>
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
                                <h4>No boats!</h4>
                            </div>
                        }
                    </div>}
                <h2 className={styles['title-catalog']}>My Bookings</h2>

                {loading ?
                    <Loader />
                    : <div className={styles['offersList-main-section']}>
                        {reservedBoats.length > 0
                            ? <ul className={styles['offersList-section']}>
                                {reservedBoats.map(boat => (
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
                                <h4>No bookings yet!</h4>
                            </div>
                        }
                    </div>}
            </section>

        </div>
    );
}