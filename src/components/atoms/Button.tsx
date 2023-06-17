import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'

interface ButtonProps {
  children?: ReactNode
  icon?: string
  color?: string
  disabled?: boolean
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonWrapper = styled.button<ButtonProps>`
  padding: 6px 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5em;
  font-size: 20px;
  min-height: 45px;
  border-radius: 4px;
  border: none;
  outline: none;
  position: relative;
  transition: 0.1s all;
  justify-content: center;

  .icon {
    position: absolute;
    font-size: 30px;
    padding: 4px;
    background: #cccccc;
    border-radius: 4px;
    color: #525252;
    right: 10px;
  }

  &.iconed {
    padding: 10px 50px 10px 12px;

    &:hover {
      background: #cccccc;
    }

    &:disabled {
      .icon {
        background: none;
        color: rgba(16, 16, 16, 0.3);
      }

      &:hover {
        background: rgba(239, 239, 239, 0.3);
      }
    }

    &.purple {
      background: ${(props) => props.theme.colors.primary};
      color: white;

      &:hover {
        background: #462085;
      }

      .icon {
        background: #462085;
        color: white;
      }
    }
  }
`

const Button = ({
  children,
  icon,
  color,
  disabled,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <ButtonWrapper
      disabled={disabled}
      className={`${className && className} ${color && color} ${
        icon && 'iconed'
      }`}
      onClick={onClick}
    >
      {children}
      {icon && <Icon propsIcon={{ className: 'icon' }} nameIcon={icon} />}
    </ButtonWrapper>
  )
}

export default Button
