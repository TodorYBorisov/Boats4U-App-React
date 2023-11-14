/* eslint-disable react/no-unescaped-entities */
import styles from './Register.module.css';
import { Link } from 'react-router-dom';

export default function Register() {
    document.title = 'Sign Up';


    return (
        <div className={styles['register']}>
            <div className={styles['register-box']}>
                <h1>Sign Up</h1>
                {/* <h4>It's free and only take a minute</h4> */}

                <form>
                    <label htmlFor="username"><span><i className="fa-solid fa-user"></i></span>Username</label>
                    <input type="text" name="username" placeholder="Username.." />

                    <label htmlFor="email">
                        <span>
                            <i className="fa-solid fa-envelope"></i>
                        </span>
                        Email
                    </label>
                    <input type="email" name="email" placeholder="Email.." />

                    <label htmlFor="tel">
                        <span>
                            <i className="fa-solid fa-phone-volume"></i>
                        </span>
                        Phone
                    </label>
                    <input type="text" name="tel" id="tel" placeholder="+359 88 888 888" />

                    <label htmlFor="password">
                        <span>
                            <i className="fa-solid fa-lock"></i>
                        </span>
                        Password
                    </label>
                    <input type="password" name="password" placeholder="Password.." />

                    <label htmlFor="rePassword">
                        <span>
                            <i className="fa-solid fa-lock"></i>
                        </span>
                        Confirm Password
                    </label>
                    <input type="password" name="rePassword" placeholder="Confirm Password.." />

                    <label htmlFor="gender">
                        <span>
                            <i className="fa-solid fa-venus-mars"></i>
                        </span>
                        Gender
                    </label>
                    <div className={styles['gender']}>
                        <input type="radio" id="female" name="gender" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="male" name="gender" value="male" />
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