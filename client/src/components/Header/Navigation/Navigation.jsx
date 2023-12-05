import styles from './Navigation.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import * as userServices from '../../../services/userServices';

export default function Navigation() {

  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  async function logoutHandler(event) {
    event.preventDefault();

    try {
      await userServices.logout(auth.accessToken);
      setAuth(null);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <nav className={styles['main-nav']}>

      <Link to='/'><img src="/assets/logo.png" alt="site-logo" /></Link>
      <ul>
        <li><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
        <li><Link to="/boats"><i className="fa-solid fa-anchor"></i> Boats</Link></li>

        {auth ?
          <>
            <li><Link to="/create"><i className="fa-solid fa-circle-plus"></i> Create</Link></li>
            <li><Link to="/search"><i className="fa-solid fa-magnifying-glass"></i> Search</Link></li>
            <li><Link to='/weather'><i className="fa-solid fa-cloud-sun"></i> Weather</Link></li>
            <li><Link to="/profile"><i className="fa-solid fa-address-card"></i> Profile</Link></li>
            <li onClick={logoutHandler}><Link><i className="fa-solid fa-right-from-bracket"></i> Logout</Link></li>
            <p>Welcome,  <span>{auth.username}</span> <i className="fa-solid fa-user"></i></p>
          </>
          :
          <>
            <li><Link to="/login"><i className="fa-solid fa-right-to-bracket"></i> Login</Link></li>
            <li><Link to="/register"><i className="fa-solid fa-user-plus"></i> Sign Up</Link></li>
          </>
        }
      </ul>
    </nav>

  );
}

