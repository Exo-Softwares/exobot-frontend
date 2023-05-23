/* Pricing Component Styles */

/* General Imports */
import styled from "styled-components";

export const PricingWrapper = styled.section`
  .pricing-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;

    .panels-container {
      gap: 40px;
      margin-top: 70px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;

      .panel {
        flex: 1;
        border-radius: 12px;
        background: ${(props) => props.theme.colors.sectionBackground};
        padding: 26px 46px;

        .panel-header {
          .title-wrapper {
            flex: 1;
            display: flex;

            &.standard {
              &::after {
                content: "";
                display: block;
                height: 1px;
                flex: 1;
                margin-left: 10px;
                background: #7a38eb;
                border-radius: 50px;
                margin-top: 15px;
              }

              h1 {
                color: #7a38eb;
              }
            }

            &.pro {
              &::after {
                content: "";
                display: block;
                height: 1px;
                flex: 1;
                margin-left: 10px;
                background: #39e667;
                border-radius: 50px;
                margin-top: 15px;
              }

              h1 {
                color: #39e667;
              }
            }

            &.advanced {
              &::after {
                content: "";
                display: block;
                height: 1px;
                flex: 1;
                margin-left: 10px;
                background: #ebba34;
                border-radius: 50px;
                margin-top: 15px;
              }

              h1 {
                color: #ebba34;
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
      }
    }
  }
`;
