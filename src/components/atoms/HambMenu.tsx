import styled from 'styled-components'

export const HambMenuWrapper = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1100px) {
    display: none;
  }

  .line {
    width: 100%;
    height: 2px;
    background: white;
  }
`

const HambMenu = () => {
  return (
    <HambMenuWrapper>
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </HambMenuWrapper>
  )
}

export default HambMenu
