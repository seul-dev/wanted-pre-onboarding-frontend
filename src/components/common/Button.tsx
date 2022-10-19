import styled, { css } from 'styled-components';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size: 'small' | 'medium' | 'large';
  color: 'green' | 'red' | 'outlineGreen';
}

const Button = ({
  children,
  disabled,
  type,
  onClick,
  size,
  color,
}: ButtonProps) => {
  return (
    <ButtonWrapper
      type={type}
      disabled={disabled}
      size={size}
      onClick={onClick}
      color={color}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const DISABLED = css`
  cursor: not-allowed;
  color: var(--black);
  &:hover {
    transform: scale(1);
    opacity: 1;
  }
`;
const COLOR = {
  green: css`
    background: var(--green);
  `,
  red: css`
    background: var(--red);
  `,
  outlineGreen: css`
    background: var(--white);
    color: var(--green);
    border: 1px solid var(--green);
  `,
};

const SIZE = {
  small: css`
    font-size: 0.8rem;
    padding: 0.5rem;
    margin-right: 0.5rem;
  `,
  medium: css`
    padding: 0.7rem 1.5rem 0.5rem 1.5rem;
  `,
  large: css`
    width: 50%;
    font-size: 1.1rem;
    padding: 0.7rem 1.5rem 0.5rem 1.5rem;
    justify-content: center;
    margin-top: 1rem;
  `,
};

const ButtonWrapper = styled.button<ButtonProps>`
  cursor: pointer;
  white-space: nowrap;
  border: 0;
  border-radius: 5px;
  color: var(--white);

  &:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
  ${(props) => props.disabled && DISABLED}
  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.size && SIZE[props.size]}
`;
