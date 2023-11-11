// import RingLoader from 'react-spinners/RingLoader';
// import { useState, useEffect } from 'react';
import OffersList from '../Catalog/OfferList/OffersList';
import styles from './Search1.module.css';




export default function Search1() {
    // const [loading, setLoading] = useState(false);
    // const [offers, setOffers] = useState([]);


    return (
        <>
            <section className={styles['catalog-page']}>

                <h1 className={styles['title-catalog']}>Search for boats</h1>

                <section className={styles['search-container']}>

                    <form className={styles['search-form']} >
                        <input
                            //value={form.search}
                            name="search"
                            type="text"
                            placeholder="Search here..."
                        //onChange={onChange}
                        />

                        <button className={styles['search-button']} type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </section>

                {/* 
                {loading ?
                    <RingLoader color="#36d7b7" />
                    :
                    <OffersList offers={offers} />
                } */}

                <OffersList />
            </section>
        </>
    );
}