import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (

        <nav className={styles['main-nav']}>

            <Link to='/'><img src="/assets/logo.png" alt="site-logo" /></Link>

            <ul>
                <li><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
                {/* <li><Link to='/about'><i className="fa-solid fa-circle-info"></i> About Us</Link></li> */}
                <li><Link to="/boats"><i className="fa-solid fa-anchor"></i> Boats</Link></li>
                <li><Link to="/create"><i className="fa-solid fa-circle-plus"></i> Create</Link></li>
                <li><Link to="/search"><i className="fa-solid fa-magnifying-glass"></i> Search</Link></li>
                <li><a href="#"><i className="fa-solid fa-cloud-sun"></i> Weather</a></li>
                <li><Link to="/profile"><i className="fa-solid fa-address-card"></i> Profile</Link></li>
                <li><a href="#"><i className="fa-solid fa-right-from-bracket"></i> Logout</a></li>
                <li><Link to="/login"><i className="fa-solid fa-right-to-bracket"></i> Login</Link></li>
                <li><Link to="/register"><i className="fa-solid fa-user-plus"></i> Sign Up</Link></li>
            </ul>
        </nav>

    );
}

