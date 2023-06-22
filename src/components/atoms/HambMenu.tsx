import styled from 'styled-components'
import React from 'react'

export const HambMenuWrapper = styled.div`
  width: 30px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media (min-width: 1100px) {
    display: none;
  }

  .line {
    width: 100%;
    height: 2px;
    background: white;
    transition: 0.2s all;
  }
`

interface HambMenuProps {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void
  mobileMenuStatus: boolean
}

const HambMenu = ({ onClick, mobileMenuStatus }: HambMenuProps) => {
  return (
    <HambMenuWrapper onClick={onClick}>
      <div
        className="line"
        style={
          mobileMenuStatus
            ? { transform: 'rotate(135deg)', position: 'absolute' }
            : undefined
        }
      />
      <div
        className="line"
        style={mobileMenuStatus ? { display: 'none' } : undefined}
      />
      <div
        className="line"
        style={
          mobileMenuStatus
            ? { transform: 'rotate(45deg)', position: 'absolute' }
            : undefined
        }
      />
    </HambMenuWrapper>
  )
}

export default HambMenu
