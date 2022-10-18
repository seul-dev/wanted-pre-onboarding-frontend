import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  background-color: var(--white);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  h1 {
    font-size: 2rem;
    color: var(--blue);
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <h1>Note App</h1>
      <Link to='/'>
        <Button type='button' disabled={false}>
          로그인
        </Button>
      </Link>
      <Button type='button' disabled={false}>
        로그아웃
      </Button>
    </Wrapper>
  );
};

export default Navigation;
