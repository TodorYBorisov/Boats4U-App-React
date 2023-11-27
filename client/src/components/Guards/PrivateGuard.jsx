import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

export default function PrivateGuard() {
    const { auth } = useContext(AuthContext);

    if (!auth?.accessToken) {
        return <Navigate to='/login' />;
    }

    return <Outlet replace={true} />;
}
