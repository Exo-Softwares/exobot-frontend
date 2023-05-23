/*  Navbar Component Styles */

/* General Imports */
import styled from "styled-components";

/* Theme Import */
import theme from "../../../styles/theme";

export const StickyNavbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  transition: 0.2s all;
  margin-bottom: 60px;
`;

export const NavbarWrapper = styled.nav`
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

  svg {
    width: 150px;
    height: 35px;
    cursor: pointer;

    image {
      width: 150px;
      height: auto;
    }
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
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: end;
    margin-bottom: 5px;

    a {
      width: 140px;
    }

    .menu {
      display: none;
      width: 30px;
      height: 30px;
      margin-left: auto;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media (max-width: 1060px) {
    ul {
      display: none;
    }

    .menu {
      display: block;
    }
  }
`;
