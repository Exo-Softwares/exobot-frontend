import { ReactNode } from "react";
import styled from "styled-components";
import { Icon } from "./Icon";

interface ButtonProps {
  children?: ReactNode;
  icon?: string;
  color?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonWrapper = styled.button<ButtonProps>`
  padding: 6px 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5em;
  font-size: 16px;
  min-height: 45px;
  border-radius: 4px;
  border: none;
  outline: none;
  position: relative;

  .icon {
    position: absolute;
    font-size: 30px;
    padding: 4px;
    background: #cccccc;
    border-radius: 4px;
    right: 10px;
  }

  &.iconed {
    padding: 10px 50px 10px 12px;
  }

  &.purple {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    transition: 0.1s all;

    &:hover {
      background: #462085;
    }

    .icon {
      background: #462085;
    }
  }
`;

const Button = ({ children, icon, color, disabled, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper
      disabled={disabled}
      className={`${color && color} ${icon && "iconed"}`}
      onClick={onClick}
    >
      {children}
      {icon && <Icon propsIcon={{ className: "icon" }} nameIcon={icon} />}
    </ButtonWrapper>
  );
};

export default Button;
