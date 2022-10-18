import { createContext, ReactNode, useState } from 'react';

interface AuthContextInterface {
  token: string;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextInterface>({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (token: string) => {
    setToken(token);
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setToken('');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
