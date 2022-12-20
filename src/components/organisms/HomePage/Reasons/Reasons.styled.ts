/* Reasons Component Styles */

/* General Imports */
import styled from 'styled-components';

export const ReasonsStyles = styled.div `
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 40px;

  flex-wrap: wrap;

  &::after {
    content: '';
    display: block;
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, #161616, #1775e1, #161616);
    border-radius: 50px;
    margin: 0 auto;
    margin-top: 40px;
  }
`
