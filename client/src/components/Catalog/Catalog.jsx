import * as dataService from '../../services/dataService';

import styles from './Catalog.module.css';
// import OffersList from './OfferList/OffersList';

import { useState, useEffect } from 'react';
import OfferItem from './OfferList/OfferItem/OfferItem';
import Loader from '../Loader/Loader.jsx';


export default function Catalog() {

    const [boats, setBoats] = useState([]);
    const [loading, setLoading] = useState(false);

    // console.log(boats);

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

    // useEffect(() => {
    //     fetch('http://localhost:3030/data/boats')
    //         .then((responce) => responce.json())
    //         .then((data) => {
    //             setBoats(data);

    //         }).catch((error)=>{
    //             console.log(error);
    //         });
    // }, []);

    return (
        <>
            <section className={styles['catalog-page']}>

                <h1 className={styles['title-catalog']}>Catalog</h1>

                {/* <OffersList boats={boats} /> */}
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
                                <h2>Unfortunately, we currently have no boats available for you right now...</h2>
                                <h2>Please visit us again later!</h2>
                            </div>
                        }
                    </div>}
                {/* <div className={styles['offersList-main-section']}>
                    {boats.length > 0
                        ? <ul className={styles['offersList-section']}>
                            {boats.map(boat => (
                                <li key={boat._id}>
                                    <OfferItem
                                        imageUrl={boat.imageUrl}
                                        startPoint={boat.startPoint}
                                        date={boat.date}
                                        time={boat.time}
                                        price={boat.price}
                                    />
                                </li>
                            ))}
                        </ul>
                        : <div className={styles['no-boats']}>
                            <h2>Unfortunately, we currently have no boats available for you right now...</h2>
                            <h2>Please visit us again later!</h2>
                        </div>
                    }
                </div> */}
            </section>
        </>
    );
}