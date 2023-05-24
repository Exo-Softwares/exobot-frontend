/* Stats Component Styles */

/* General Imports */
import styled from "styled-components";

export const StatsWrapper = styled.div`
  .info-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-top: 70px;
    flex-wrap: wrap;

    .info-container {
      flex: 1;
      outline: 1px solid ${(props) => props.theme.colors.cardOutline};
      border-radius: 6px;
      height: 150px;
      min-width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 25px;
      transition: 0.2s all;
      cursor: default;

      &:hover {
        outline: 1px solid white;
        scale: 1.02;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      }

      h1 {
        font-size: 22px;
        color: white;
      }

      p {
        text-align: center;
        font-size: 18px;
        margin-left: 10px;
        color: hsla(0, 0%, 100%, 0.7);

        span {
          color: ${(props) => props.theme.colors.secondary};
        }
      }

      .stats-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 20px;

        div {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${(props) => props.theme.colors.primary};
          box-shadow: 0px 0px 8px 1px ${(props) => props.theme.colors.primary};
        }
      }
    }
  }
`;
