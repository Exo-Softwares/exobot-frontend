/*  Application Buy Button Component Styles */

/* General Imports */
import styled from "styled-components";

/* Theme Import */
import theme from "../../../../styles/theme";

export const ApplicationBuyButtonStyles = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 30px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: 0.2s all;
  outline: 1px solid #292929;

  p {
    font-size: 14px;
    color: ${theme.colors.text};
  }

  &:first-child {
    margin-top: 0px;
  }

  &:last-child {
    margin-bottom: 0px;
  }

  .text-container {
    margin-left: 20px;
  }

  &:hover {
    scale: 1.02;
  }

  .icon-container {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
