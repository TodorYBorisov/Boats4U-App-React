import styles from './Weather.module.css';
import { useState } from 'react';

export default function Weather() {
    document.title = 'Weather';

    const initialValue = { search: '' };

    const [searchValue, setSearchValue] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const onChange = (event) => {
        setSearchValue(state => ({ ...state, [event.target.name]: event.target.value, }));
    };

    function onSubmit(event) {
        event.preventDefault();


        // .then(result => setSearchValue(result)
        // .catch(error => console.log(error))
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
        <div className={styles['wrapper']}>

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
                    <button className={styles['search-button']} onClick={onSubmit} >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </section>
                        {errors.search && (<p className={styles['errorMessage']}>{errors.search}</p>)}

            {/* disabled={Object.values(errors).some(x => x) || (Object.values(searchValue).some(x => x == ''))} type="submit" onClick={onSubmit} */}

            <div className={styles['container']}>

                <div className={styles['weather']}>

                    <div className={styles['upper-data']}>
                        <img src="/assets/weather-image.jpg" alt="weather-image" />
                        <div className={styles['weather-data']}>
                            <div className={styles['location']}>Sofia</div>
                            <div className={styles['temperature']}>{25}°C</div>
                            <div className={styles['image']}>{25}°C</div>
                        </div>
                    </div>
                    <div className={styles['lower-data']}>
                        <div className={styles['more-info-lable']}>
                            More information
                        </div>

                        <div className={styles['more-info-container']}>
                            <div className={styles['info-block']}>
                                <div className={styles['info-block-lable']}>
                                    <img src="/assets/low-temperature.png" />
                                    <span>Min</span>
                                </div>
                                <div className={styles['info-block-value']}>
                                    {-5}°C
                                </div>
                            </div>
                            <div className={styles['info-block']}>
                                <div className={styles['info-block-lable']}>
                                    <img src="/assets/high-temperature.png" />
                                    <span>Max</span>
                                </div>
                                <div className={styles['info-block-value']}>
                                    {28}°C
                                </div>
                            </div>

                            <div className={styles['info-block']}>
                                <div className={styles['info-block-lable']}>
                                    <img src="/assets/humidity.png" />
                                    <span>Humidity</span>
                                </div>
                                <div className={styles['info-block-value']}>
                                    {56}%
                                </div>
                            </div>

                            <div className={styles['info-block']}>
                                <div className={styles['info-block-lable']}>
                                    <img src="/assets/windSpead.png" />
                                    <span>Wind</span>
                                </div>
                                <div className={styles['info-block-value']}>
                                    {18} km/h
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

