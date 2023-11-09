import styles from './Navigation.module.css';

export default function Navigation() {
    return (

        <nav className={styles['main-nav']}>

            <img src="/assets/logo.png" alt="site-logo" />

            <ul>
                <li><a href="/"><i className="fa-solid fa-house"></i> Home</a></li>
                {/* <li><a href="#"><i className="fa-solid fa-circle-info"></i> About Us</a></li> */}
                <li><a href="#"><i className="fa-solid fa-anchor"></i> Boats</a></li>
                <li><a href="#"><i className="fa-solid fa-circle-plus"></i> Create</a></li>
                <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i> Search</a></li>
                <li><a href="#"><i className="fa-solid fa-cloud-sun"></i> Weather</a></li>
                <li><a href="#"><i className="fa-solid fa-address-card"></i> Profile</a></li>
                <li><a href="#"><i className="fa-solid fa-right-from-bracket"></i> Logout</a></li>
                <li><a href="#"><i className="fa-solid fa-right-to-bracket"></i> Login</a></li>
                <li><a href="#"><i className="fa-solid fa-user-plus"></i> Sign Up</a></li>
            </ul>
        </nav>

    );
}

