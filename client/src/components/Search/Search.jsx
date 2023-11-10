import styles from './Search.module.css';
import { useState } from 'react';

export default function Search(searchHandler) {

    const [form, setForm] = useState({
        search: ''
    });

    function onSubmit(event) {
        event.preventDefault();
        searchHandler(form);
    }

    function onChange(event) {
        setForm(state => ({
            ...state,
            [event.target.name]: event.target.value
        }));
    }

    return (
        <section className={styles['search-page']}>

            <h1 className={styles['title-search']}>Search for boats</h1>

            <section className={styles['search-container']}>

                <form className={styles['search-form']} onSubmit={onSubmit}>
                    <input
                        value={form.search}
                        name="search"
                        type="text"
                        placeholder="Search here..."
                        onChange={onChange}
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

            {/* <OffersList /> */}
              
            {/* <div className={styles['no-boats']}>
                <h2>Sorry, no boats found for you.</h2>
                <h2>Please visit us again later!</h2>
            </div> */}
        </section>
    );
}
