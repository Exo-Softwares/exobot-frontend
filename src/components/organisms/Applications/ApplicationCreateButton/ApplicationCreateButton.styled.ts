/*  Application Create Button Component Styles */

/* General Imports */
import styled from 'styled-components';

/* Theme Import */
import theme from '../../../../styles/theme';

export const ApplicationCreateButtonStyles = styled.div `
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0px 30px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  background: ${theme.colors.dark[300]};
  border-left: 6px solid ${theme.colors.pricing.advanced};
  outline: 1px solid #292929;

  p {
    font-size: 14px;
    color: ${theme.colors.text}
  }

  &:last-child {
    margin-bottom: 0px;
  }

  .application-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .icon-container {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .application-plan {
    margin-left: auto;
    font-size: 20px;
    font-weight: bold;
  }

  .application-plan p {
    background: -webkit-linear-gradient(110deg, #4a4a4a, ${theme.colors.pricing.advanced});
    font-size: 22px;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-container {
    margin-left: 20px;
  }
`