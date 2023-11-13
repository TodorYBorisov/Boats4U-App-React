/* eslint-disable react/no-unescaped-entities */
import styles from './Details.module.css';
// import * as dataService from '../../services/dataService';

// import { useState, useEffect } from 'react';
// import { useParams, } from 'react-router-dom';

export default function Details() {

    // const { id } = useParams();
    // const [details, setDetails] = useState({});


    // console.log(details);

    // useEffect(() => {
    //     dataService.getBoatById(id)
    //         .then(result => setDetails(result))
    //         .catch((error) => console.log(error));
    // }, [id]);


    return (
        <div className={styles['boat-details']}  >

            <h1 className={styles['details-title']}>Boat details</h1>

            <div className={styles['boat-info']}>
                <div className={styles['port']}>
                    <span className={styles['icon']}><i className="fas fa-map-marked-alt"></i></span>
                    <h5> From port <span>Corfu</span> to port <span>Zakintos</span> </h5>
                </div>

                <div className={styles['passengers']}>
                    <span className={styles['icon']}><i className="fas fa-users buddies"></i></span>
                    <h5> Boat capacity: <span>6</span> Available for: <span>4</span> days </h5>
                </div>

                <div className={styles['calendar']}>
                    <span className={styles['icon']}><i className="fas fa-calendar-alt"></i></span>
                    <h5> Trip start date: <span>12/12/2023</span> at <span>09:00</span> </h5>
                </div>

                <div className={styles['model']}>
                    <span className={styles['icon']}><i className="fa-solid fa-ship"></i></span>
                    <h5> Boat model: <span>Jeanneau Leader</span> Year manufactured: <span>2018</span> </h5>
                </div>
            </div>

            <div className={styles['picture-desc']}>

                <img src="/assets/boat1.jpg" alt="" />
                <div className={styles['trip-desc']}>
                    <h5>Additional infomarion</h5>
                    <textarea className={styles['lead']} >{ }</textarea>
                    <h5>Rent price: <span className={styles['lead']}>5000</span> EUR</h5>


                    <div className={styles['buttons']}>
                        <button className={styles['delete']}><i className="fa-solid fa-trash" ></i> Delete</button>
                        <button className={styles['edit']}><i className="fa-solid fa-user-pen"></i> Edit</button>


                        <button className={styles['book']}><i className="fa-solid fa-shoe-prints"></i> Book</button>
                        <button className={styles['like']}><i className="fa-solid fa-heart"></i> Like</button>

                        <span>Already booked. Don't be late!</span>
                    </div>
                </div>
                <p className={styles['total-likes']}>User likes: 5</p>
            </div>
        </div>
    );
}