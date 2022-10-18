import styled, { css } from 'styled-components';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  disabled: boolean;
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
  width: 100%;
  justify-content: center;
`;

const ButtonWrapper = styled.button<ButtonProps>`
  cursor: pointer;
  white-space: nowrap;
  border: 0;
  border-radius: 5px;
  background-color: var(--green);
  color: var(--white);
  padding: 0.5rem 1.5rem;

  &:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
  ${(props) => props.disabled && DISABLED}
  ${(props) => props.fullWith && FULLWIDTH}
`;

const Button = ({ children, disabled, type, fullWith }: ButtonProps) => {
  return (
    <ButtonWrapper type={type} disabled={disabled} fullWith={fullWith}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
