/* Footer Component Styles */

/* General Imports */
import styled from 'styled-components';

/* Theme Import */
import theme from '../../../styles/theme';

export const FooterStyles = styled.footer `
  width: 100%;
  background: #080808;
  padding: 60px 0px;

  .footer-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .footer-brand p {
    color: #7d7d7d;
    text-align: center;
    margin-bottom: 15px;
  }

  .social-medias {
    display: flex;
    justify-content: center;
    margin-top: 40px;
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
    color: white;
  }
`
