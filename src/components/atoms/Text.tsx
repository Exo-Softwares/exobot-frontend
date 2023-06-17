import React from 'react'
import styled from 'styled-components'

interface TextProps {
  children: React.ReactNode
  fontSize?: string
  weight?: string
  className?: string
  center?: boolean
}

const TextWrapper = styled.p<TextProps>`
  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`

const Text = ({ children, weight, fontSize, className, center }: TextProps) => {
  return (
    <TextWrapper
      className={className && className}
      style={{
        fontWeight:
          (weight === 'light' && '400') ||
          (weight === 'regular' && '600') ||
          (weight === 'bold' ? '800' : ''),

        fontSize: fontSize || 'initial',
        textAlign: center ? 'center' : 'start',
      }}
      center
    >
      {children}
    </TextWrapper>
  )
}

export default Text
