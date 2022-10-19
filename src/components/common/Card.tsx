import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  item?: boolean;
}

const Card = ({ children, item }: CardProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;

const Wrapper = styled.div`
  background-color: var(--white);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  color: var(--black);
  border-radius: 8px;
  padding: 2rem;
  margin: 3rem auto;
`;
