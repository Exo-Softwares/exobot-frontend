import styled from 'styled-components'

export const MobileMenuWrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 90px);
  position: absolute;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  nav {
    width: 100%;

    ul {
      display: flex;
      flex-direction: column;

      a {
        &.active {
          li {
            color: white;
          }
        }

        li {
          width: 100%;
          border-bottom: 1px solid ${(props) => props.theme.colors.cardOutline};
          padding: 20px;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }

  .button {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 20px;

    button {
      padding: 13px;
      width: 60%;
    }
  }
`
