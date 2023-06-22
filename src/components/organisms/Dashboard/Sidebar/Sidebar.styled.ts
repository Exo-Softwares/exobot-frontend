import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  min-width: 300px;
  max-height: 100vh;
  overflow: hidden;
  padding: 20px 0px;
  background: ${(props) => props.theme.colors.background};
  border-right: 1px solid ${(props) => props.theme.colors.cardOutline};

  @media (max-width: 1100px) {
    display: none;
  }

  header {
    margin-bottom: 40px;
    padding: 0px 20px;
  }

  nav {
    ul {
      display: flex;
      flex-direction: column;
      gap: 40px;

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        list-style: none;
        transition: 0.1s all;
        cursor: pointer;
        padding: 0px 20px;

        &::before {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          filter: blur(20px);
          background: ${(props) => props.theme.colors.primary};
          left: -20px;
        }

        &.active {
          border-radius: 4px;
          color: white;

          &::before {
            content: '';
            position: absolute;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            filter: blur(20px);
            background: ${(props) => props.theme.colors.primary};
            left: -20px;
          }

          .icon {
            color: ${(props) => props.theme.colors.primary};
          }
        }

        &:hover {
          color: white;
          margin-left: 5px;

          &::before {
            content: '';
          }
        }

        .icon {
          font-size: 25px;
        }
      }
    }
  }
`
