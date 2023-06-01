/*  Navbar Component Styles */

/* General Imports */
import styled from 'styled-components'

/* Theme Import */
// import theme from '../../../styles/theme'

export const StickyNavbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  transition: 0.2s all;
  margin-bottom: 60px;
`

export const NavbarWrapper = styled.nav`
  border-bottom: 1px solid ${(props) => props.theme.colors.cardOutline};
  .container {
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }

  .brand {
    margin-right: 15px;
  }

  ul {
    margin-left: 40px;
    margin-bottom: 5px;

    a {
      list-style: none;
      display: inline-block;
      margin-right: 25px;
      cursor: pointer;
      color: #d4d4d4;

      &:hover {
        color: white;
      }
    }

    .active {
      color: white !important;
    }

    @media (max-width: 1100px) {
      display: none;
    }
  }

  .account-wrapper {
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: end;
    margin-bottom: 5px;

    button {
      font-size: 16px;
    }

    @media (max-width: 1100px) {
      display: none;
    }

    .stuff {
      display: flex;
      flex-direction: row;
      gap: 30px;

      .notification-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .icon-container {
          display: flex;
          justify-content: center;
          align-items: center;

          .icon {
            font-size: 30px;
            cursor: pointer;

            &:hover {
              color: white;
            }
          }
        }

        .new-notification-ball {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #b03e3e;
          bottom: 8px;
          right: 2px;
          border-radius: 100%;
        }
      }

      .avatar-container {
        width: 45px;
        height: 45px;
        position: relative;
      }
    }
  }
`
