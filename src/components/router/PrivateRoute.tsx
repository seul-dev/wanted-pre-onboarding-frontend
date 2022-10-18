import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../store/AuthContext';

const PrivateRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
