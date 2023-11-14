import { useState } from 'react';
import * as dataService from '../../services/dataService';
import styles from './Search1.module.css';



export default function Search1() {
    document.title = 'Search';

    const [form, setForm] = useState({ search: '' });

    const [searchResults, setSearchResults] = useState([]);



    function onSubmit(event) {
        event.preventDefault();

        dataService.getSearchedItem(form.search)
            .then(results => {
                setSearchResults(results);
            })
            .catch(error => {
                console.log(error);
            });
        // searchHandler(form);
    }

    function onChange(event) {
        setForm(state => ({
            ...state,
            [event.target.name]: event.target.value
        }));
    }

    console.log(form.search);

    return (
        <>
            <section className={styles['catalog-page']}>

                <h1 className={styles['title-catalog']}>Search for boats</h1>

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

                {/* Render search results */}
                {searchResults.length > 0 && (
                    <section className={styles['search-results']}>
                        <h2>Search Results:</h2>
                        <ul>
                            {searchResults.map(result => (
                                <li key={result.id}>{result.name}</li>
                            ))}
                        </ul>
                    </section>
                )}


            </section>
        </>
    );
}