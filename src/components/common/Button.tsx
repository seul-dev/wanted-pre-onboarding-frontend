import styled, { css } from 'styled-components';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  disabled: boolean;
}
const DISABLED = css`
  cursor: not-allowed;
  background: #a7a7a7;
  color: #111;
  &:hover {
    transform: scale(1);
    opacity: 1;
  }
`;

const ButtonWrapper = styled.button<ButtonProps>`
  cursor: pointer;
  white-space: nowrap;
  border: 0;
  border-radius: 5px;
  background-color: #2e92d5;
  color: #ffff;
  font-size: 18px;
  padding: 5px 10px;
  &:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
  ${(props) => props.disabled && DISABLED}
`;

const Button = ({ children, disabled, type }: ButtonProps) => {
  return (
    <ButtonWrapper type={type} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
