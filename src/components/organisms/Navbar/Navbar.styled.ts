/*  Navbar Component Styles */

/* General Imports */
import styled from 'styled-components';

/* Theme Import */
import theme from '../../../styles/theme';

export const StickyNavbar = styled.div `
  position: sticky;
  top: 0;
  z-index: 100;
  transition: 0.2s all;
`;


export const NavbarStyles = styled.nav `
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: start;
    align-items: center;


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
    }

    ul li {
      list-style: none;
      display: inline-block;
      margin-right: 15px;
      cursor: pointer;
      color: #d4d4d4;

    }

    ul li:hover {
      color: white;
    }

    ul li:last-child {
      margin-right: 0px;
    }

    .button-wrapper {
      width: 100%;
      display: flex;
      flex: 1;
      justify-content: end;
      margin-bottom: 5px;
    }

    .button-wrapper a {
      width: 140px;
    }
`;
