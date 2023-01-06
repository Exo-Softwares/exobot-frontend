/*  Application Active Button Component Styles */

/* General Imports */
import styled from 'styled-components';

/* Theme Import */
import theme from '../../../../styles/theme'; 

export const SwitchPageStyles = styled.div `
  width: 100%;
  background: #121212;
  border-radius: 15px;
  padding: 6px;
  display: flex;
  align-items: center;
  gap: 10px;

  .switch {
    padding: 10px;
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;  
    border-radius: 15px;
    cursor: pointer;
  }

  .active {
    background: ${theme.colors.dark[300]}

  }
`