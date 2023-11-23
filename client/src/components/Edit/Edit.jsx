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
    const [errors, setErrors] = useState({});

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

    //=====================================Validations
    const startPointValidator = () => {
        if (formData.startPoint.length < 1) {
            setErrors(state => ({ ...state, startPoint: 'The starting point must be at least 1 character long!' }));
        } else {
            if (errors.startPoint) {
                setErrors(state => ({ ...state, startPoint: '' }));
            }
        }
    };

    const endPointValidator = () => {
        if (formData.endPoint.length < 1) {
            setErrors(state => ({ ...state, endPoint: 'The ending point must be at least 1 character long!' }));
        } else {
            if (errors.endPoint) {
                setErrors(state => ({ ...state, endPoint: '' }));
            }
        }
    };

    const dateValidator = () => {
        if (formData.date.length == null) {
            setErrors(state => ({ ...state, date: 'Please click on the calendar to select date!' }));
        } else {
            if (errors.date) {
                setErrors(state => ({ ...state, date: '' }));
            }
        }
    };

    const timeValidator = () => {
        if (formData.time.length == 0) {
            setErrors(state => ({ ...state, time: 'Please click on the clock to select time!' }));
        } else {
            if (errors.time) {
                setErrors(state => ({ ...state, time: '' }));
            }
        }
    };

    function imageValidator(imageUrl) {
        const imageRegex = /^https?:\/\/.+$/gi;
        return imageRegex.test(imageUrl);
    }

    const imageUrlValidator = () => {
        if (!imageValidator(formData.imageUrl)) {
            setErrors(state => ({
                ...state,
                imageUrl: 'Image URL must start with http:// or https://!'
            }));
        } else {
            if (errors.imageUrl) {
                setErrors(state => ({ ...state, imageUrl: '' }));
            }
        }
    };

    const modelValidator = () => {
        if (formData.model.length == 0) {
            setErrors(state => ({ ...state, model: 'Boat model is required!' }));
        } else {
            if (errors.model) {
                setErrors(state => ({ ...state, model: '' }));
            }
        }
    };

    const positiveNumberValidator = () => {
        if (!Number(formData.passengerCapacity) || formData.passengerCapacity <= 0) {
            setErrors(state => ({ ...state, passengerCapacity: 'Passenger capacity must be a positive number!' }));
        } else {
            if (errors.passengerCapacity) {
                setErrors(state => ({ ...state, passengerCapacity: '' }));
            }
        }
    };

    const priceValidator = () => {
        if (!Number(formData.price) || formData.price <= 0) {
            setErrors(state => ({ ...state, price: 'Price must be a positive number!' }));
        } else {
            if (errors.price) {
                setErrors(state => ({ ...state, price: '' }));
            }
        }
    };

    const availabilityValidator = () => {
        if (!Number(formData.availability) || formData.availability <= 0) {
            setErrors(state => ({ ...state, availability: 'Days available must be a positive number!' }));
        } else {
            if (errors.availability) {
                setErrors(state => ({ ...state, availability: '' }));
            }
        }
    };

    const yearValidator = () => {
        if (!Number(formData.year) || formData.year <= 0) {
            setErrors(state => ({ ...state, year: 'Year must be a positive number!' }));
        } else {
            if (errors.year) {
                setErrors(state => ({ ...state, year: '' }));
            }
        }
    };

    const descriptionValidator = () => {
        if (formData.description.length < 20) {
            setErrors(state => ({...state,description: 'Additional descriptive information must be at least 20 characters long!'}));
        } else {
            if (errors.description) {
                setErrors(state => ({ ...state, description: '' }));
            }
        }
    };

    //=====================================

    return (
        <>
            <section className={styles['py-5']} id={styles['offer-trip-page']}>
                <div className={`${styles['container']} ${styles['offer-trip']}`}>
                    <h1>Edit trip</h1>
                    <div>
                        {/* <form onSubmit={onSubmit} >
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
                        </form> */}
                        <form onSubmit={onSubmit} >
                            <div className={styles['offer-label']}>
                                <label htmlFor="startPoint"> <i className="fas fa-map-marker-alt"></i> Starting Port</label>
                                <label htmlFor="endPoint"> <i className="fas fa-map-marker-alt"></i> End Port</label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['offer-input']}`}>
                                <input onChange={onChange} onBlur={startPointValidator} type="text" className={styles['form-control-2']} id="startPoint" placeholder="Corfu" name="startPoint" value={formData.startPoint} />
                                {errors.startPoint && (<p className={styles['errorMessage']}>{errors.startPoint}</p>)}
                                {errors.endPoint && (<p className={styles['errorMessage']}>{errors.endPoint}</p>)}
                                <input onChange={onChange} onBlur={endPointValidator} type="text" className={styles['form-control-2']} id="endPoint" placeholder="Zakynthos" name="endPoint" value={formData.endPoint} />
                            </div>
                            <div className={styles['offer-label']}>
                                <label htmlFor="date"> <i className="far fa-calendar-alt"></i> Start Date</label>
                                <label htmlFor="time"> <i className="far fa-clock"></i> Start Time</label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['offer-input']}`}>
                                <input onChange={onChange} onBlur={dateValidator} type="date" className={styles['form-control-2']} id="date" placeholder="09 Dec 2023" name="date" value={formData.date} />
                                {errors.date && (<p className={styles['errorMessage']}>{errors.date}</p>)}
                                {errors.time && (<p className={styles['errorMessage']}>{errors.time}</p>)}
                                <input onChange={onChange} onBlur={timeValidator} type="time" className={styles['form-control-2']} id="time" placeholder="08:00 PM" name="time" value={formData.time} />
                            </div>
                            <div className={styles['offer-label']}>
                                <label htmlFor="imageUrl"> <i className="fa-solid fa-image"></i> Image</label>
                                <label htmlFor="model"> <i className="fa-solid fa-circle-info"></i> Model</label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['offer-input']}`}>
                                <input onChange={onChange} onBlur={imageUrlValidator} type="text" className={styles['form-control-2']} id="imageUrl" placeholder="http:// or https://" name="imageUrl" value={formData.imageUrl} />
                                {errors.imageUrl && (<p className={styles['errorMessage']}>{errors.imageUrl}</p>)}
                                {errors.model && (<p className={styles['errorMessage']}>{errors.model}</p>)}
                                <input onChange={onChange} onBlur={modelValidator} type="text" className={styles['form-control-2']} id="model" placeholder="Jeanneau Leader" name="model" value={formData.model} />
                            </div>
                            <div className={styles['offer-label']}>
                                <label htmlFor="passengerCapacity"> <i className="fa-solid fa-ship"></i> Capacity</label>
                                <label htmlFor="price"> <i className="fa-solid fa-euro-sign"></i> Price</label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['offer-input']}`}>
                                <input onChange={onChange} onBlur={positiveNumberValidator} type="text" className={styles['form-control-2']} id="passengerCapacity" placeholder="10" name="passengerCapacity" value={formData.passengerCapacity} />
                                {errors.passengerCapacity && (<p className={styles['errorMessage']}>{errors.passengerCapacity}</p>)}
                                {errors.price && (<p className={styles['errorMessage']}>{errors.price}</p>)}
                                <input onChange={onChange} onBlur={priceValidator} type="text" className={styles['form-control-2']} id="price" placeholder="2000" name="price" value={formData.price} />
                            </div>

                            <div className={styles['offer-label']}>
                                <label htmlFor="availability">Availability</label>
                                <label htmlFor="year">Year</label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['offer-input']}`}>
                                <input onChange={onChange} onBlur={availabilityValidator} type="text" className={styles['form-control-2']} id="availability" placeholder="4" name="availability" value={formData.availability} />
                                {errors.availability && (<p className={styles['errorMessage']}>{errors.availability}</p>)}
                                {errors.year && (<p className={styles['errorMessage']}>{errors.year}</p>)}  
                                <input onChange={onChange} onBlur={yearValidator} type="text" className={styles['form-control-2']} id="year" placeholder="2022" name="year" value={formData.year} />
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="description">Description</label>
                                {errors.description && (<p className={styles['errorMessage']}>{errors.description}</p>)}
                                <textarea onChange={onChange} onBlur={descriptionValidator} className={styles['form-control']} id={styles['description']} placeholder="Any additional information about the trip" name="description" value={formData.description}></textarea>
                            </div>
                            <button disabled={(Object.values(errors).some(x => x)
                                            || (Object.values(formData).some(x => x == '')))} type="submit" className={`${styles['btn']} ${styles['btn-primary']}`}>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
}