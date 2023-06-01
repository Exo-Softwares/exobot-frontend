import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  min-width: 300px;
  height: 100%;
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
          margin-left: 5px;
          color: white;
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
