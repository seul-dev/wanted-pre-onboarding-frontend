import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';
import { AuthContext } from '../store/AuthContext';

const Auth = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/todo');
    }
  }, [isLoggedIn, navigate]);
  return (
    <>
      <AuthForm />
    </>
  );
};

export default Auth;
