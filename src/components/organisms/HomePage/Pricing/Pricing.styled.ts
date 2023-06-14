/* Pricing Component Styles */

/* General Imports */
import styled from 'styled-components'

export const PricingWrapper = styled.section`
  .swiper-pagination {
    bottom: 0px;

    .swiper-pagination-bullet-active {
      background-color: ${(props) => props.theme.colors.primary} !important;
    }

    .swiper-pagination-bullet {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }

  .swiper {
    height: 710px;
  }

  .swiper-container {
    height: 1000px;
    overflow: visible;
  }

  .pricing-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;

    .disclaimer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-top: 20px;
      font-size: 8px;

      .icon {
        font-size: 24px;
      }

      @media (min-width: 1500px) {
        display: none;
      }
    }

    .panels-container {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      width: 100%;

      .panel {
        display: flex;
        flex-direction: column;
        flex: 1;
        border-radius: 12px;
        background: ${(props) => props.theme.colors.accentColor};
        padding: 26px 46px;
        min-width: 360px;
        min-height: 674px;

        @media (max-width: 1100px) {
          scale: 0.9;
          min-width: 300px;
        }

        .panel-header {
          .title-wrapper {
            flex: 1;
            display: flex;

            &.standard {
              &::after {
                content: '';
                display: block;
                height: 1px;
                flex: 1;
                margin-left: 10px;
                background: ${(props) => props.theme.colors.pricing.standard};
                border-radius: 50px;
                margin-top: 15px;
              }

              h1 {
                color: ${(props) => props.theme.colors.pricing.standard};
              }
            }

            &.fivem {
              &::after {
                content: '';
                display: block;
                height: 1px;
                flex: 1;
                margin-left: 10px;
                background: ${(props) => props.theme.colors.pricing.fivem};
                border-radius: 50px;
                margin-top: 15px;
              }

              h1 {
                color: ${(props) => props.theme.colors.pricing.fivem};
              }
            }

            &.advanced {
              &::after {
                content: '';
                display: block;
                height: 1px;
                flex: 1;
                margin-left: 10px;
                background: ${(props) => props.theme.colors.pricing.advanced};
                border-radius: 50px;
                margin-top: 15px;
              }

              h1 {
                color: ${(props) => props.theme.colors.pricing.advanced};
              }
            }
          }

          .price-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;

            p {
              font-size: 40px;
              font-weight: 600;
              color: white;

              span {
                font-size: 18px;
                font-weight: 300;
              }
            }

            #monthly {
              font-size: 15px;
              margin-left: 10px;
            }
          }
        }

        .panel-benefits {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-top: 40px;
          margin-bottom: 50px;

          .benefit {
            width: 100%;
            height: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            border-bottom: 1px solid #383838;
            padding: 25px 0px;

            svg {
              width: 20px;
              color: white;
            }

            p {
              color: #a6a6a6;
              margin-left: 10px;
            }
          }
        }

        .panel-bottom {
          display: flex;
          margin-top: auto;

          button {
            font-size: 20px;
            width: 100%;
            height: 60px;
          }
        }
      }
    }
  }
`
