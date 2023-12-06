import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import * as userServices from '../../services/userServices';

export default function Login() {
    document.title = 'Login';

    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const [userData, setuserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    // const [hasServerError, setHasServerError] = useState(false);
    // const [serverError, setServerError] = useState({});

    function onChange(event) {
        setuserData(state => ({ ...state, [event.target.name]: event.target.value }));
    }

    async function onSubmit(event) {
        event.preventDefault();

        try {
            const { email, password } = userData;
            const user = await userServices.login(email, password);
            setuserData(user);
            setAuth(user);

            navigate('/');
        } catch (error) {
            console.log(error);
            // setHasServerError(true);
            // setServerError(error.message);
        }
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const emailValidator = () => {
        if (!validateEmail(userData.email)) {
            setErrors(state => ({
                ...state,
                email: 'Please enter a valid email address!'
            }));
        } else {
            if (errors.email) {
                setErrors(state => ({ ...state, email: '' }));
            }
        }
    };

    const passwordValidator = () => {
        if (userData.password.length < 5) {
            setErrors(state => ({ ...state, password: 'Password must be at least 5 characters long!' }));
        } else {
            if (errors.password) {
                setErrors(state => ({ ...state, password: '' }));
            }
        }
    };

    return (
        <div className={styles['login']}>

            <div className={styles['login-box']}>
                <h1>Login</h1>

                <form onSubmit={onSubmit}>
                    <label htmlFor="email"><span><i className="fa-solid fa-envelope"></i></span>Email</label>
                    <input data-testid='email' onChange={onChange} value={userData.email} onBlur={emailValidator} type="email" name="email" placeholder="example@example.com" />
                    {errors.email && (<p className={styles['errorMessage']}>{errors.email}</p>)}

                    <label htmlFor="password"><span><i className="fa-solid fa-lock"></i></span>Password</label>
                    <input data-testid='password' onChange={onChange} value={userData.password} onBlur={passwordValidator} type="password" name="password" placeholder="Password.." />
                    {errors.password && (<p className={styles['errorMessage']}>{errors.password}</p>)}

                    <button data-testid='loginBtn' className={styles['button-login']}>Login</button>
                </form>

                <div className={styles['last-p']}>
                    <p>Not have an account? <Link to='/register' data-testid='link'>Sign Up here</Link></p>
                </div>
            </div >

        </div>
    );
}