import styled, { css } from 'styled-components';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  disabled: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWith?: boolean;
}
const DISABLED = css`
  cursor: not-allowed;
  background: var(--gray);
  color: var(--black);
  &:hover {
    transform: scale(1);
    opacity: 1;
  }
`;
const FULLWIDTH = css`
  width: 50%;
  font-size: 1.1rem;
  justify-content: center;
  margin-top: 1rem;
`;

const ButtonWrapper = styled.button<ButtonProps>`
  cursor: pointer;
  white-space: nowrap;
  border: 0;
  border-radius: 5px;
  background-color: var(--green);
  color: var(--white);
  padding: 0.7rem 1.5rem 0.5rem 1.5rem;

  &:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
  ${(props) => props.disabled && DISABLED}
  ${(props) => props.fullWith && FULLWIDTH}
`;

const Button = ({
  children,
  disabled,
  type,
  fullWith,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonWrapper
      type={type}
      disabled={disabled}
      fullWith={fullWith}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
