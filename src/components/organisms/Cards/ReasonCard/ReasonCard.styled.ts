/* Reasons Component Styles */

/* General Imports */
import styled from "styled-components";

export const ReasonCardWrapper = styled.div`
  outline: 1px solid #212121;
  min-width: 300px;
  flex: 1;
  border-radius: 6px;
  transition: 0.2s all;
  cursor: default;

  &:hover {
    scale: 1.02;
    outline: 1px solid white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .reason .reason-image {
    background-size: cover;
    flex: 1;
  }

  .reason-content {
    padding: 25px;
  }

  .reason-content h1 {
    color: white;
    font-size: 23px;
    font-weight: 500;
  }

  .reason-content h1 span {
    font-size: 24px;
    color: ${(props) => props.theme.colors.primary};
  }

  .reason-content p {
    margin-top: 15px;
    font-size: 18px;
    color: hsla(0, 0%, 100%, 0.7);
  }
`;
