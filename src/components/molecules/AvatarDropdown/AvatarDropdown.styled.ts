import styled from 'styled-components'

export const AvatarDropdownWrapper = styled.div`
  padding: 15px;
  top: 63px;
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.cardOutline};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  position: absolute;
  margin: 0 auto;
  cursor: default;
  z-index: 2;

  @media (max-width: 1100px) {
    right: 0px;
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${(props) => props.theme.colors.cardOutline};
    margin-bottom: 10px;

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
      align-items: center;
      justify-content: center;

      .logout {
        border-top: 1px solid ${(props) => props.theme.colors.cardOutline};
        padding-top: 12px;
        margin-top: 60px;
      }

      li {
        list-style: none;
        cursor: pointer;
        transition: 0.1s ease-out;
        gap: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
          font-size: 20px;
        }

        &:hover {
          color: white;
        }
      }
    }
  }
`
