import OfferItem from '../Catalog/OfferList/OfferItem/OfferItem';
import * as dataService from '../../services/dataService';
import Loader from '../Loader/Loader';
import styles from './Profile.module.css';
import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../context/authContext';

// import { getUser } from '../../services/userServices';

export default function Profile() {
    document.title = 'Profile';

    const [boats, setBoats] = useState([]);
    const [loading, setLoading] = useState(false);

    const { auth } = useContext(AuthContext);
    // const [user, setUser] = useState(null);
    // console.log(user);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = getUser();
    //             setUser(data);

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchData();
    // }, [auth]);


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

            dataService.getAllBookings()
            .then(res=>console.log((res.filter(x=>x._ownerId==auth._id))))
            .catch(error => console.log(error));

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
                                <h2>No boats!</h2>
                                {/* <h2>Please visit us again later!</h2> */}
                            </div>
                        }
                    </div>}
                    <h2 className={styles['title-catalog']}>My Bookings</h2>
                    {}
            </section>

        </div>
    );
}