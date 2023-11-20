import styles from './Edit.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import * as dataService from '../../services/dataService';
import { useState, useEffect } from 'react';

export default function Edit() {
    document.title = 'Edit';


    const navigate = useNavigate();
    // const [disableButton, setDisableButton] = useState(false);
    const [formData, setFormData] = useState({
        startPoint: '',
        endPoint: '',
        date: '',
        time: '',
        imageUrl: '',
        model: '',
        passengerCapacity: '',
        price: '',
        availability: '',
        year: '',
        description: '',
    });
    const { id } = useParams();

      useEffect(() => {
        dataService.getBoatById(id)
            .then(result => setFormData(result))
            .catch((error) => console.log(error));
    }, [id]);
  
    //тук актуализираме стария стейт на формата при промяна в input полето
    function onChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value, }));
    }

    //onSubmit Edit
    const onSubmit = (event) => {
        event.preventDefault();

        dataService.editBoat(formData._id, formData)
            .then(() => {
                navigate(`/boats/details/${formData._id}`);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
            <section className={styles['py-5']} id={styles['offer-trip-page']}>
                <div className={`${styles['container']} ${styles['offer-trip']}`}>
                    <h1>Edit trip</h1>
                    <div>
                        <form onSubmit={onSubmit} >
                            <div className={styles['offer-label']}>
                                <label htmlFor="startPoint"> <i className="fas fa-map-marker-alt"></i> Starting Port</label>
                                <label htmlFor="endPoint"> <i className="fas fa-map-marker-alt"></i> End Port</label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['offer-input']}`}>
                                <input onChange={onChange} type="text" className={styles['form-control-2']} id="startPoint" placeholder="Corfu" name="startPoint" value={formData.startPoint} />
                                <input onChange={onChange} type="text" className={styles['form-control-2']} id="endPoint" placeholder="Zakynthos" name="endPoint" value={formData.endPoint} />
                            </div>
                            <div className={styles['offer-label']}>
                                <label htmlFor="date"> <i className="far fa-calendar-alt"></i> Start Date</label>
                                <label htmlFor="time"> <i className="far fa-clock"></i> Start Time</label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['offer-input']}`}>
                                <input onChange={onChange} type="date" className={styles['form-control-2']} id="date" placeholder="09 Dec 2023" name="date" value={formData.date} />
                                <input onChange={onChange} type="time" className={styles['form-control-2']} id="time" placeholder="08:00 PM" name="time" value={formData.time} />
                            </div>
                            <div className={styles['offer-label']}>
                                <label htmlFor="imageUrl"> <i className="fa-solid fa-image"></i> Image</label>
                                <label htmlFor="model"> <i className="fa-solid fa-circle-info"></i> Model</label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['offer-input']}`}>
                                <input onChange={onChange} type="text" className={styles['form-control-2']} id="imageUrl" placeholder="https://..." name="imageUrl" value={formData.imageUrl} />
                                <input onChange={onChange} type="text" className={styles['form-control-2']} id="model" placeholder="Jeanneau Leader" name="model" value={formData.model} />
                            </div>
                            <div className={styles['offer-label']}>
                                <label htmlFor="passengerCapacity"> <i className="fa-solid fa-ship"></i> Capacity</label>
                                <label htmlFor="price"> <i className="fa-solid fa-euro-sign"></i> Price</label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['offer-input']}`}>
                                <input onChange={onChange} type="text" className={styles['form-control-2']} id="passengerCapacity" placeholder="10" name="passengerCapacity" value={formData.passengerCapacity} />
                                <input onChange={onChange} type="text" className={styles['form-control-2']} id="price" placeholder="2000" name="price" value={formData.price} />
                            </div>

                            <div className={styles['offer-label']}>
                                <label htmlFor="availability">Availability</label>
                                <label htmlFor="year">Year</label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['offer-input']}`}>
                                <input onChange={onChange} type="text" className={styles['form-control-2']} id="availability" placeholder="4" name="availability" value={formData.availability} />
                                <input onChange={onChange} type="text" className={styles['form-control-2']} id="year" placeholder="2022" name="year" value={formData.year} />
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="description">Description</label>
                                <textarea onChange={onChange} className={styles['form-control']} id={styles['description']} placeholder="Any additional information about the trip" name="description" value={formData.description}></textarea>
                            </div>
                            <button type="submit" className={`${styles['btn']} ${styles['btn-primary']}`}>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
}