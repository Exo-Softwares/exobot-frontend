/* Footer Component Styles */

/* General Imports */
import styled from 'styled-components';

/* Theme Import */
import theme from '../../../styles/theme';

export const FooterStyles = styled.footer `
  width: 100%;
  background: #080808;
  padding: 60px 0px;
  margin-top: 60px;

  .footer-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .footer-menus {
    display: flex;
  }

  .footer-menus nav {
    margin-right: 80px;
  }

  .footer-menus nav h1 {
    margin-bottom: 14px;
  }

  .footer-menus nav ul {
    display: flex;
    flex-direction: column;
  }

  .footer-menus nav ul a {
    list-style: none;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .footer-menus nav ul a:last-child {
    margin-bottom: 0px;
  }

  .footer-menus nav ul a:hover {
    color: #fff;
  }

  .active {
    color: white !important;
  }

  .social-medias {
    display: flex;
  }

  .social-medias a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 38px;
    height: 38px;
    background: #212121;
    margin-right: 20px;
    transition: 0.2s all;
    cursor: pointer;

    &:hover {
      background: ${theme.colors.primary}
    }
  }

  .social-medias a:last-child {
    margin-right: 0px;
  }

  .icon {
    width: 20px;
    color: white;
  }
`
