/*  Navbar Component Styles */

/* General Imports */
import styled from 'styled-components'

/* Theme Import */
// import theme from '../../../styles/theme'

export const StickyNavbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  transition: 0.2s all;
  margin-bottom: 60px;

  &.hidden {
    top: -100px;
    transition: top 0.3s ease-in;
  }
`

export const NavbarWrapper = styled.nav`
  border-bottom: 1px solid ${(props) => props.theme.colors.cardOutline};

  .container {
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .brand {
      margin-right: 15px;
      width: 180px;
      height: auto;

      @media (max-width: 1100px) {
        width: 160px;
        margin-right: 0px;
      }
    }

    .links {
      margin-left: 40px;
      margin-bottom: 5px;

      li {
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
      }
    }

    .avatar-container {
      width: 45px;
      height: 45px;
      position: relative;

      @media (max-width: 1100px) {
        width: 40px;
        height: 40px;
      }

      &.mobile {
        @media (min-width: 1100px) {
          display: none;
        }
      }
    }
  }
`
