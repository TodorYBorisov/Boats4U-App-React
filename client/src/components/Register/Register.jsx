import styles from './Register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import * as userServices from '../../services/userServices';

export default function Register() {
    document.title = 'Sign Up';

    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const [userData, setuserData] = useState({
        username: '',
        email: '',
        phone: '',
        gender: '',
        password: '',
        rePassword: '',
    });

    const [errors, setErrors] = useState({});
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});

    function onChange(event) {
        setuserData(state => ({ ...state, [event.target.name]: event.target.value }));
    }

    async function onSubmit(event) {
        event.preventDefault();

        try {
            const trimmedUserData = Object.fromEntries(
                Object.entries(userData).map(([key, value]) => [key, value.trim()])
            );
            const { username, email, phone, gender, password } = trimmedUserData;
            const user = await userServices.register(username, email, phone, gender, password);
            setAuth(user);

            navigate('/');
        } catch (error) {
            console.log(error);
            setHasServerError(true);
            setServerError(error.message);
        }
    }

    const usernameValidator = () => {
        if (userData.username.length < 3) {
            setErrors(state => ({ ...state, username: 'Username must be at least 3 characters long!' }));
        } else {
            if (errors.username) {
                setErrors(state => ({ ...state, username: '' }));
            }
        }
    };

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

    const phoneValidator = () => {
        if (!Number(userData.phone)) {
            setErrors(state => ({ ...state, phone: 'Please, enter your Phone Number!' }));
        } else {
            if (errors.phone) {
                setErrors(state => ({ ...state, phone: '' }));
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

    const rePasswordValidator = () => {
        if (userData.rePassword != userData.password) {
            setErrors(state => ({ ...state, rePassword: 'Passwords do not match. Please try again!' }));
        } else {
            if (errors.rePassword) {
                setErrors(state => ({ ...state, rePassword: '' }));
            }
        }
    };

    return (
        <div className={styles['register']}>
            <div className={styles['register-box']}>
                <h1>Sign Up</h1>

                <form onSubmit={onSubmit}>
                    <label htmlFor="username"><span><i className="fa-solid fa-user"></i></span>Username</label>
                    <input data-testid='username' onChange={onChange} value={userData.username} onBlur={usernameValidator} type="text" name="username" placeholder="Username.." />
                    {errors.username && (<p className={styles['errorMessage']}>{errors.username}</p>)}

                    <label htmlFor="email"><span><i className="fa-solid fa-envelope"></i></span>Email</label>
                    <input data-testid='email' onChange={onChange} value={userData.email} onBlur={emailValidator} type="email" name="email" placeholder="example@example.com" />
                    {errors.email && (<p className={styles['errorMessage']}>{errors.email}</p>)}

                    <label htmlFor="phone"><span><i className="fa-solid fa-phone-volume"></i></span>Phone</label>
                    <input data-testid='phone' onChange={onChange} value={userData.phone} onBlur={phoneValidator} type="text" name="phone" id="phone" placeholder="+359 88 888 888" />
                    {errors.phone && (<p className={styles['errorMessage']}>{errors.phone}</p>)}

                    <label htmlFor="password"><span><i className="fa-solid fa-lock"></i></span>Password</label>
                    <input data-testid='password' onChange={onChange} value={userData.password} onBlur={passwordValidator} type="password" name="password" placeholder="Password.." />
                    {errors.password && (<p className={styles['errorMessage']}>{errors.password}</p>)}

                    <label htmlFor="rePassword"><span><i className="fa-solid fa-lock"></i></span>Confirm Password</label>
                    <input data-testid='rePassword' onChange={onChange} value={userData.rePassword} onBlur={rePasswordValidator} type="password" name="rePassword" placeholder="Confirm Password.." />
                    {errors.rePassword && (<p className={styles['errorMessage']}>{errors.rePassword}</p>)}

                    <label htmlFor="gender"><span><i className="fa-solid fa-venus-mars"></i></span>Select Gender</label>
                    <div className={styles['gender']}>
                        <input onChange={onChange} checked={userData.gender === 'female'} type="radio" id="female" name="gender" value="female" data-testid='female' />
                        <label htmlFor="female">Female</label>
                        <input onChange={onChange} checked={userData.gender === 'male'} type="radio" id="male" name="gender" value="male" data-testid='male' />
                        <label htmlFor="male">Male</label>
                    </div>

                    <button className={styles['button-register']} disabled={(Object.values(errors).some(x => x)
                        || (Object.values(userData).some(x => x == '')))} data-testid='regBtn'>Sign Up</button>

                    {hasServerError && (<p className={styles.serverError}>{serverError}</p>)}

                </form>

                <div className={styles['last-p']}>
                    <p>Already have an account? <Link to='/login' data-testid='link'>Login here</Link></p>
                </div>
            </div >
        </div>
    );
}