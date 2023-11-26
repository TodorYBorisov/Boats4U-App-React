import styles from './Search.module.css';
import {useState } from 'react';//useEffect
import * as dataService from '../../services/dataService';
import OfferItem from '../Catalog/OfferList/OfferItem/OfferItem';
import Loader from '../Loader/Loader';

const initialValue = {
    search: ''
};

export default function Search() {
    const [errors, setErrors] = useState({});
    const [boats, setBoats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState(initialValue);
    const [searchPerformed, setSearchPerformed] = useState(false);

    //If i want instant search i can implement this below!
    // useEffect(() => {
    //     if (searchValue.search.trim() === '') {
    //         setBoats([]);
    //         setSearchPerformed(false);
    //         return;
    //     }
    //     setLoading(true);
    //     dataService.getAllData()
    //         .then(result => {
    //             const filteredBoats = result.filter(boat =>
    //                 boat.startPoint.toLowerCase().includes(searchValue.search.toLowerCase()) ||
    //                 boat.endPoint.toLowerCase().includes(searchValue.search.toLowerCase()) ||
    //                 boat.model.toLowerCase().includes(searchValue.search.toLowerCase()) ||
    //                 boat.description.toLowerCase().includes(searchValue.search.toLowerCase()) ||
    //                 (typeof boat.price === 'number' &&
    //                     boat.price.toString().includes(searchValue.search.toLowerCase())) ||
    //                 (typeof boat.year === 'number' &&
    //                     boat.year.toString().includes(searchValue.search.toLowerCase())) ||
    //                 (typeof boat.date === 'string' &&
    //                 boat.date.includes(searchValue.search.toLowerCase()))
    //             );
    //             setBoats(filteredBoats);

    //             if (filteredBoats.length === 0) {
    //                 setSearchPerformed(true);
    //             } else {
    //                 setSearchPerformed(false);
    //             }
    //         })
    //         .catch(error => console.log(error))
    //         .finally(() => setLoading(false));
    // }, [searchValue]);

    const onChange = (event) => {
        setSearchValue(state => ({
            ...state,
            [event.target.name]: event.target.value,
        }));
    };
    //uncomment for instant search and replace onsubmit with handleSearch
    // const handleSearch = () => {
    // };

    function onSubmit(event) {
        event.preventDefault();

        setLoading(true);
        dataService.getAllData()
            .then(result => {
                const filteredBoats = result.filter(boat =>
                    boat.startPoint.toLowerCase().includes(searchValue.search.toLowerCase()) ||
                    boat.endPoint.toLowerCase().includes(searchValue.search.toLowerCase()) ||
                    boat.model.toLowerCase().includes(searchValue.search.toLowerCase()) ||
                    boat.description.toLowerCase().includes(searchValue.search.toLowerCase()) ||
                    (typeof boat.price === 'number' &&
                        boat.price.toString().includes(searchValue.search.toLowerCase())) ||
                    (typeof boat.year === 'number' &&
                        boat.year.toString().includes(searchValue.search.toLowerCase())) ||
                    (typeof boat.date === 'string' &&
                        boat.date.includes(searchValue.search.toLowerCase())
                        )
                );

                setBoats(filteredBoats);

                if (filteredBoats.length === 0) {
                    setSearchPerformed(true);
                } else {
                    setSearchPerformed(false);
                }
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }

    const inputValidator = () => {
        if (searchValue.search.length < 1) {
            setErrors(state => ({ ...state, search: 'The search field cannot be empty!' }));
        } else {
            if (errors.search) {
                setErrors(state => ({ ...state, search: '' }));
            }
        }
    };

    return (
        <section className={styles['search-page']}>

            <h1 className={styles['title-search']}>Search for boats</h1>

            <section className={styles['search-container']}>

                <form className={styles['search-form']} >
                    <input
                        value={searchValue.search}
                        name="search"
                        type="text"
                        placeholder="Search here..."
                        onChange={onChange}
                        onBlur={inputValidator}
                        />
                        {errors.search && (<p className={styles['errorMessage']}>{errors.search}</p>)}
                    <button className={styles['search-button']} disabled={Object.values(errors).some(x=>x) || (Object.values(searchValue).some(x => x == ''))} type="submit" onClick={onSubmit}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </section>

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
                            {searchPerformed && (<h2>Sorry, no results were found!</h2>)}
                        </div>
                    }
                </div>}
        </section>
    );
}


    // function onChange(event) {
    //     setSearchValue(state => ({ ...state, [event.target.name]: event.target.value }));
    // }

    // function onChange(event) {
    //     const { name, value } = event.target;
    //     setBoats((prevFormData) => ({ ...prevFormData, [name]: value, }));
    // }



        // const onChange = (event) => {
    //     let value = '';
    //     if (event.target.startPoint) {
    //         value = event.target.value;
    //     }

    //     setSearchValue(state => ({
    //         ...state,
    //         [event.target.name]: value,
    //     }));

    // };