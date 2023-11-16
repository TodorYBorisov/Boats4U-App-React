import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import * as userServices from '../../services/userServices';



export default function Login() {
    document.title = 'Login';

    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    // async function onSubmit(event) {
    //     event.preventDefault();
    //     const { email, password } = Object.fromEntries(new FormData(event.target));

    //     try {
    //         const user = await userServices.login(email, password);
    //         setAuth(user);
    //         navigate('/');

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    function onSubmit(event) {
        event.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(event.target));
    
        userServices.login(email, password)
            .then(auth => {
                setAuth(auth);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    return (
        <div className={styles['login']}>

            <div className={styles['login-box']}>
                <h1>Login</h1>

                <form onSubmit={onSubmit}>
                    <label htmlFor="email"><span><i className="fa-solid fa-envelope"></i></span>Email</label>
                    <input type="email" name="email" placeholder="Email.." />

                    <label htmlFor="password"><span><i className="fa-solid fa-lock"></i></span>Password</label>
                    <input type="password" name="password" placeholder="Password.." />

                    <button className={styles['button-login']}>Login</button>
                </form>

                <div className={styles['last-p']}>
                    <p>Not have an account? <Link to='/register'>Sign Up here</Link></p>
                </div>
            </div >

        </div>
    );
}