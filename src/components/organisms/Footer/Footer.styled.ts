/* Footer Component Styles */

/* General Imports */
import styled from 'styled-components'

/* Theme Import */
import theme from '../../../styles/theme'

export const FooterWrapper = styled.footer`
  width: 100%;
  background: #080808;
  padding: 60px 0px;

  .footer-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .footer-menus {
      display: flex;

      nav {
        margin-right: 80px;

        ul {
          display: flex;
          flex-direction: column;

          a {
            list-style: none;
            margin-bottom: 10px;
            cursor: pointer;

            &.active {
              color: white !important;
            }

            &:hover {
              color: #fff;
            }

            &:last-child {
              margin-bottom: 0px;
            }
          }
        }

        h1 {
          margin-bottom: 14px;
        }
      }

      .social-medias {
        display: flex;

        a {
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
            background: ${theme.colors.primary};
          }

          &:last-child {
            margin-right: 0px;
          }

          .icon {
            width: 20px;
            color: white;
          }
        }
      }

      @media (max-width: 1100px) {
        display: none;
      }
    }
  }
`
