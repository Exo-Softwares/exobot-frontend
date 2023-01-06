/*  Application Buy Button Component Styles */

/* General Imports */
import styled from 'styled-components';

/* Theme Import */
import theme from '../../../../styles/theme';

export const ApplicationBuyButtonStyles = styled.div `
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 30px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  background: ${theme.colors.dark[300]};
  transition: 0.2s all;
  outline: 1px solid #292929;

  p {
    font-size: 14px;
    color: ${theme.colors.text}
  }

  &:last-child {
    margin-bottom: 0px;
  }

  .text-container {
    margin-left: 20px;
  }

  &:hover {

  }

  .icon-container {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`