/*  Dashboard Component Styles */

/* General Imports */
import styled from "styled-components";

/* Theme Import */
import theme from "../../../styles/theme";

export const ApplicationsStyles = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

export const ApplicationsTemplateWrapper = styled.div`
  height: 500px;
  width: 100%;

  .your-applications {
    width: 100%;
    height: 400px;
  }

  .switches-wrapper {
    width: 100%;
    background: #121212;
    border-radius: 15px;
    padding: 6px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;
  }

  .switches-wrapper .switch {
    padding: 10px;
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .active {
    background: ${theme.colors.dark[300]};
    transition: all 0.09s;
  }
`;
