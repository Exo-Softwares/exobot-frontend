import styled from 'styled-components'

export const AvatarDropdownWrapper = styled.div`
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 12px;

    .green {
      margin-top: 3px;
      border-radius: 100%;
      background: ${(props) => props.theme.colors.secondary};
      width: 5px;
      height: 5px;
    }

    h1 {
      color: white;

      span {
        color: #a1a1a1;
      }
    }
  }

  nav {
    ul {
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;

      li {
        padding: 12px;
        list-style: none;
        cursor: pointer;
        transition: 0.1s ease-out;
        gap: 10px;
        font-size: 18px;
        min-width: 150px;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid ${(props) => props.theme.colors.cardOutline};
        align-items: center;

        .icon {
          font-size: 20px;
        }

        &:hover {
          color: white;
        }

        &.logout {
          padding: 6px 12px;
          background: none;
          border-radius: 6px;
          border-top: none;
          font-size: 16px;
          border: 1px solid #9c3232;
          color: #9c3232;
          margin: 10px;
          justify-content: center;
          margin-top: 40px;

          &:hover {
            background: #9c3232;
            color: white;
          }
        }
      }
    }
  }
`
