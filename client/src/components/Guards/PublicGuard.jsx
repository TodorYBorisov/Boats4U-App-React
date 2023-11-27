import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

export default function PublicGuard() {
    const { auth } = useContext(AuthContext);

    if (auth?.accessToken) {
        return <Navigate to='/' />;
    }

    return <Outlet/>;
}