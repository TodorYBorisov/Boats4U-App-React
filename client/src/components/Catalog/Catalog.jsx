// import RingLoader from 'react-spinners/RingLoader';
// import { useState, useEffect } from 'react';
import styles from './Catalog.module.css';
import OffersList from './OfferList/OffersList';


export default function Catalog() {
    // const [loading, setLoading] = useState(false);
    // const [offers, setOffers] = useState([]);


    return (
        <>
            <section className={styles['catalog-page']}>

                <h1 className={styles['title-catalog']}>Catalog</h1>

                {/* 
                {loading ?
                    <RingLoader color="#36d7b7" />
                    :
                    <OffersList offers={offers} />
                } */}

                    <OffersList/>
            </section>
        </>
    );
}