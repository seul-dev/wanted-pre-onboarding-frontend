import { useContext } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { AuthContext } from '../../store/AuthContext';

const Navigation = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Wrapper>
      <Logo to='/'>Todo App</Logo>
      {isLoggedIn && (
        <Button type='button' disabled={false} onClick={handleLogout}>
          로그아웃
        </Button>
      )}
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  background-color: var(--white);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`;
const Logo = styled(Link)`
  font-size: 2rem;
  color: var(--blue);
  text-decoration: none;
`;
