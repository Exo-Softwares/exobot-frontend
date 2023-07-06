import styled from 'styled-components'

export const SimpleNavbarWrapper = styled.header`
  width: 100%;
  height: 90px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .back-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    a {
      display: flex;
      align-items: center;

      .icon {
        font-size: 30px;
        cursor: pointer;

        &:hover {
          color: white;
        }
      }
    }

    .application-title {
      @media screen and (max-width: 750px) {
        display: none;
      }
    }
  }

  .stuff {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;

    .notification-container {
      width: 45px;
      height: 45px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .avatar-container {
      width: 45px;
      height: 45px;
      position: relative;
      display: flex;
      justify-content: center;
    }
  }
`
