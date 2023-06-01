import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  width: 300px;
  height: 100%;
  padding: 20px;
  background: ${(props) => props.theme.colors.background};
  border-right: 1px solid ${(props) => props.theme.colors.cardOutline};
  box-shadow: rgba(0, 0, 0, 0.56) 0px 15px 20px 4px;

  header {
    margin-bottom: 40px;
  }

  nav {
    ul {
      li {
        display: flex;
        align-items: center;
        gap: 10px;
        list-style: none;
        transition: 0.1s all;
        cursor: pointer;

        &:hover {
          color: white;
        }

        .icon {
          font-size: 25px;
        }
      }
    }
  }
`
