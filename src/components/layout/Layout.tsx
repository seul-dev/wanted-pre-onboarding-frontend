import styled from 'styled-components';
import Navigation from './Navigation';
import { GlobalStyle } from '../../styles/GlobalStyle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled.div`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;
