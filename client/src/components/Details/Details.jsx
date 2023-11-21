/* eslint-disable react/no-unescaped-entities */
import styles from './Details.module.css';
import * as dataService from '../../services/dataService';

import { AuthContext } from '../../context/authContext';
import { useState, useEffect, useContext } from 'react'; //useContext
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function Details() {
    document.title = 'Details';
    const navigate = useNavigate();
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    const { auth } = useContext(AuthContext);
    const [likes, setLikes] = useState([]);
    const [isLiked, setIsLiked] = useState(false);


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

    // useEffect(() => {
    //     dataService.getAllLikesForBoatById(id)
    //         .then(likes => {
    //             setLikes(state=>({...state, likes}));
    //         })
    //         .catch((error) => console.log(error));
    // }, []);


    useEffect(() => {

        dataService.getBoatById(id)
            .then(data => {
                setIsOwner(auth?._id === data._ownerId);
                setDetails(data);
            })
            .catch(error => {
                // Handle errors if the getById function fails
                console.error('Error fetching data:', error);

            });
    }, [id, auth]);

    useEffect(()=>{
        const storedLikes = localStorage.getItem('likes');
        if(storedLikes){
            setLikes(JSON.parse(storedLikes));
        }
    },[]);


    const onLikeClick = () => {
      
        if (likes.some(like => like._ownerId === auth._id)) {
            window.alert('You cannot like this twice!');
            return;
        }

        dataService.likeBoat(id, auth._id)
            .then(() => {
                setLikes([...likes, { id, _ownerId: auth._id }]);
                setIsLiked(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    useEffect(()=>{
        localStorage.setItem('likes',JSON.stringify(likes));
    });




    const ownerButtons = (
        <>
            <button className={styles['delete']} onClick={onDelete}><i className="fa-solid fa-trash" ></i> Delete</button>
            <Link to={`/boats/edit/${id}`}><button className={styles['edit']}><i className="fa-solid fa-user-pen"></i> Edit</button></Link>
        </>
    );

    const userButtons = (
        <>
            <button className={styles['book']}><i className="fa-solid fa-shoe-prints"></i> Book</button>
            <button className={styles['like']} onClick={onLikeClick} disabled={ isLiked} ><i className="fa-solid fa-heart"></i> Like</button>

            {/* <span>Already booked. Don't be late!</span> */}
        </>
    );

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

                        {/* <button className={styles['delete']} onClick={onDelete}><i className="fa-solid fa-trash" ></i> Delete</button>
                        <Link to={`/boats/edit/${id}`}><button className={styles['edit']}><i className="fa-solid fa-user-pen"></i> Edit</button></Link>

                        <button className={styles['book']}><i className="fa-solid fa-shoe-prints"></i> Book</button>
                        <button className={styles['like']}><i className="fa-solid fa-heart"></i> Like</button>

                        <span>Already booked. Don't be late!</span> */}
                    </div>
                </div>
                <p className={styles['total-likes']} >User likes {likes?.length || 0} <i className="fa-solid fa-heart"></i></p>
            </div>
        </div>
    );
}




// useEffect(()=>{
//     const storedLikes = localStorage.getItem('likes');
//     if(storedLikes){
//         setLikes(JSON.parse(storedLikes));
//     }
// },[]);


// const onLikeClick = (id) => {

//     if (likes.some(like => like._ownerId === auth._id)) {
//         window.alert('You cannot like this twice!');
//         return;
//     }

//     dataService.likeBoat(id, auth._id)
//         .then(() => {
//             setLikes([...likes, { id, _ownerId: auth._id }]);
//             setIsLiked(true);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };


// useEffect(()=>{
//     localStorage.setItem('likes',JSON.stringify(likes));
// });