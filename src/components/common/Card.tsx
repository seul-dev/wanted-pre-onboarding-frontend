import styled, { css } from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  item?: boolean;
}

const Card = ({ children, item }: CardProps) => {
  return <Wrapper item={item}>{children}</Wrapper>;
};

export default Card;

const ITEMSTYLE = css`
  margin: 0.8rem auto;
`;

const Wrapper = styled.div<CardProps>`
  background-color: var(--white);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  color: var(--black);
  border-radius: 8px;
  padding: 2rem;
  margin: 3rem auto;
  ${(props) => props.item && ITEMSTYLE}
`;
