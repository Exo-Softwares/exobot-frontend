import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  min-width: 300px;
  max-height: 100vh;
  overflow: hidden;
  padding: 20px;
  background: ${(props) => props.theme.colors.background};
  border-right: 1px solid ${(props) => props.theme.colors.cardOutline};

  header {
    margin-bottom: 40px;
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

        &.active {
          border-radius: 4px;
          color: white;

          .icon {
            color: ${(props) => props.theme.colors.primary};
          }
        }

        &:hover {
          color: white;
          margin-left: 5px;
        }

        .icon {
          font-size: 25px;
        }
      }
    }
  }
`
