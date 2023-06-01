import styled from 'styled-components'

export const SimpleNavbarWrapper = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .back-container {
    .icon {
      font-size: 30px;
      cursor: pointer;

      &:hover {
        color: white;
      }
    }
  }

  .avatar-container {
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    justify-content: center;
  }
`
