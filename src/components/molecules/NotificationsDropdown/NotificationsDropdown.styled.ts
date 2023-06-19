import styled from 'styled-components'

export const NotificationsDropdownWrapper = styled.div`
  padding: 15px;
  background: blue;
  position: absolute;
  min-width: 300px;
  top: 55px;
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.cardOutline};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  z-index: 2;
  margin: 0 auto;

  @media (max-width: 1100px) {
    right: -40px;
  }

  header {
    padding-bottom: 10px;
    border-bottom: 1px solid ${(props) => props.theme.colors.cardOutline};
    margin-bottom: 15px;

    h1 {
      color: white;
    }
  }

  .notifications {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .notification {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding: 10px;
      padding-bottom: 20px;
      gap: 15px;
      border-bottom: 1px solid ${(props) => props.theme.colors.cardOutline};

      &:last-child {
        border: none;
      }

      .content {
        .title {
          color: white;
        }
      }

      .icon-container {
        display: flex;
        align-items: center;

        .icon {
          font-size: 10px;
          color: ${(props) => props.theme.colors.primary};

          &:hover {
            color: ${(props) => props.theme.colors.primary} !important;
          }
        }
      }
    }
  }
`
