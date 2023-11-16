
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

    function onChange(event) {
        setuserData(state => ({ ...state, [event.target.name]: event.target.value }));
    }

    async function onSubmit(event) {
        event.preventDefault();

        try {
            const { username, email, phone, gender, password } = userData;
            const user = await userServices.register(username, email, phone, gender, password);
            setAuth(user);

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles['register']}>
            <div className={styles['register-box']}>
                <h1>Sign Up</h1>
                {/* <h4>It's free and only take a minute</h4> */}

                <form onSubmit={onSubmit}>
                    <label htmlFor="username"><span><i className="fa-solid fa-user"></i></span>Username</label>
                    <input onChange={onChange} value={userData.username} type="text" name="username" placeholder="Username.." />

                    <label htmlFor="email">
                        <span>
                            <i className="fa-solid fa-envelope"></i>
                        </span>
                        Email
                    </label>
                    <input onChange={onChange} value={userData.email} type="email" name="email" placeholder="Email.." />

                    <label htmlFor="phone">
                        <span>
                            <i className="fa-solid fa-phone-volume"></i>
                        </span>
                        Phone
                    </label>
                    <input onChange={onChange} value={userData.phone} type="text" name="phone" id="phone" placeholder="+359 88 888 888" />

                    <label htmlFor="password">
                        <span>
                            <i className="fa-solid fa-lock"></i>
                        </span>
                        Password
                    </label>
                    <input onChange={onChange} value={userData.password} type="password" name="password" placeholder="Password.." />

                    <label htmlFor="rePassword">
                        <span>
                            <i className="fa-solid fa-lock"></i>
                        </span>
                        Confirm Password
                    </label>
                    <input onChange={onChange} value={userData.rePassword} type="password" name="rePassword" placeholder="Confirm Password.." />

                    <label htmlFor="gender">
                        <span>
                            <i className="fa-solid fa-venus-mars"></i>
                        </span>
                        Gender
                    </label>
                    <div className={styles['gender']}>
                        <input onChange={onChange} checked={userData.gender === 'female'} type="radio" id="female" name="gender" value="female" />
                        <label htmlFor="female">Female</label>
                        <input onChange={onChange} checked={userData.gender === 'male'} type="radio" id="male" name="gender" value="male" />
                        <label htmlFor="male">Male</label>
                    </div>

                    <button className={styles['button-register']}>Sign Up</button>
                    {/* <input type="submit" value="Register" /> */}
                </form>

                <div className={styles['last-p']}>
                    <p>Already have an account? <Link to='/login'>Login here</Link></p>
                </div>

            </div >
        </div>
    );
}