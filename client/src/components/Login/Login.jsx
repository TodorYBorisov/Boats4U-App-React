import styles from './Login.module.css';

export default function Login() {
    return (
        <div className={styles['login']}>

            <div className={styles['login-box']}>
                <h1>Login</h1>

                <form>
                    <label htmlFor="email"><span><i className="fa-solid fa-envelope"></i></span>Email</label>
                    <input type="email" name="email" placeholder="Email.." />

                    <label htmlFor="password"><span><i className="fa-solid fa-lock"></i></span>Password</label>
                    <input type="password" name="password" placeholder="Password.." />

                    <button className={styles['button-login']}>Login</button>
                </form>

                <div className={styles['last-p']}>
                    <p>Not have an account? Sign Up here</p>
                </div>
            </div >

        </div>
    );
}