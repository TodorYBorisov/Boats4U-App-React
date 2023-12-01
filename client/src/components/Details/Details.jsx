/* eslint-disable react/no-unescaped-entities */
import styles from './Details.module.css';
import * as dataService from '../../services/dataService';
import { AuthContext } from '../../context/authContext';
import { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function Details() {
    document.title = 'Details';
    const navigate = useNavigate();
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    const { auth } = useContext(AuthContext);

    const [isLiked, setIsLiked] = useState(false);
    const [boatLikes, setBoatLikes] = useState(0);

    const [isBooked, setIsBooked] = useState(false);
    const [bookByOther, setBookByOther] = useState(true);

    async function onDelete(event) {
        event.preventDefault();
        const confirm = window.confirm('Are you sure you want to delete this boat?');
        if (confirm) {
            try {
                await dataService.deleteBoat(details._id);
                navigate('/boats');

            } catch (error) {
                console.log('Error deleting data:', error);
            }
        }
    }

    useEffect(() => {

        dataService.getBoatById(id)
            .then(data => {
                setIsOwner(auth?._id === data._ownerId);
                setDetails(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        dataService.getAllBookings()
            .then(res => {
                const isBoatBooked = res.some(booking => booking.userId === id && booking._ownerId === auth._id);
                setIsBooked(isBoatBooked);
                const isAlreadyBooked = res.some(booking => booking.userId === id && booking._ownerId !== auth._id);
                setBookByOther(isAlreadyBooked);
            })
            .catch(error => console.log(error));

    }, [id, auth]);

    const onLikeClick = () => {
        dataService.like(auth._id, id)
            .then(() => {
                setBoatLikes(oldCountLikes => oldCountLikes + 1);
                setIsLiked(true);
            })
            .catch(error => {
                console.error('Error liking the boat:', error);
            });
    };

    // useEffect(() => {
    //     dataService.canLike(id, auth._id)
    //         .then(countLikes => {
    //             setIsLiked(countLikes !== 0);
    //         })
    //         .catch(error => console.log(error));

    //     dataService.likesForBoat(id)
    //         .then((totalBoatLikes) => setBoatLikes(totalBoatLikes))
    //         .catch(error => console.log(error));

    // }, []);

    useEffect(() => {
        if (auth && auth._id) {
            dataService.canLike(id, auth._id)
                .then(countLikes => {
                    setIsLiked(countLikes !== 0);
                })
                .catch(error => console.log(error));
        } else {
            setIsLiked(false);
        }

        dataService.likesForBoat(id)
            .then((totalBoatLikes) => setBoatLikes(totalBoatLikes))
            .catch(error => console.log(error));
    }, []);

    const onBookClick = (event) => {
        event.preventDefault();
        // const boatId = id;
        // const userId = auth._id;
        dataService.book(id, auth._id)
            .then(() => setIsBooked(true))
            .catch(error => console.log(error));
    };

    const ownerButtons = (
        <>
            <button className={styles['delete']} onClick={onDelete}><i className="fa-solid fa-trash" ></i> Delete</button>
            <Link to={`/boats/edit/${id}`}><button className={styles['edit']}><i className="fa-solid fa-user-pen"></i> Edit</button></Link>
        </>
    );

    const userButtons = (
        <>
            {bookByOther ?
                (<span>Sorry, booked by another user!</span>) :
                isBooked ? (<span>Already booked. Don't be late!</span>) :
                    (<button className={styles['book']} onClick={onBookClick} disabled={isBooked}><i className="fa-solid fa-shoe-prints"></i> Book</button>)
            }

            <button className={styles['like']} onClick={onLikeClick} disabled={isLiked} ><i className="fa-solid fa-heart"></i> Like</button>
        </>
    );
//if(Math.random() < 0.5){throw new Error('This is an error initiated to check for a white screen of death');}
    return (
        <div className={styles['boat-details']}  >

            <h1 className={styles['details-title']}>Boat details</h1>

            <div className={styles['boat-info']}>
                <div className={styles['port']}>
                    <span className={styles['icon']}><i className="fas fa-map-marked-alt"></i></span>
                    <h5> From port <span>{details.startPoint}</span> to port <span>{details.endPoint}</span> </h5>
                </div>

                <div className={styles['passengers']}>
                    <span className={styles['icon']}><i className="fas fa-users buddies"></i></span>
                    <h5> Boat capacity: <span>{details.passengerCapacity}</span> Available for: <span>{details.availability}</span> days </h5>
                </div>

                <div className={styles['calendar']}>
                    <span className={styles['icon']}><i className="fas fa-calendar-alt"></i></span>
                    <h5> Trip start date: <span>{details.date}</span> at <span>{details.time}</span> </h5>
                </div>

                <div className={styles['model']}>
                    <span className={styles['icon']}><i className="fa-solid fa-ship"></i></span>
                    <h5> Boat model: <span>{details.model}</span> Year manufactured: <span>{details.year}</span> </h5>
                </div>
            </div>

            <div className={styles['picture-desc']}>

                <img src={details.imageUrl} alt="" />
                <div className={styles['trip-desc']}>
                    <h5>Additional infomarion</h5>
                    <textarea className={styles['lead']} value={details.description} ></textarea>
                    <h5>Rent price: <span className={styles['lead']}>{details.price}</span> EUR</h5>

                    <div className={styles['buttons']}>

                        {auth && (isOwner ? ownerButtons : userButtons)}

                    </div>
                </div>
                <p className={styles['total-likes']} >User likes {boatLikes} <i className="fa-solid fa-heart"></i></p>
            </div>
        </div>
    );
}

