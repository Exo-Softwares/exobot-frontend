/* Button Styles */

/* General Imports */
import styled from "styled-components";

export const ButtonDefault = styled.button `
    padding: 8px;
    background: #1775e1;
    border: none;
    border-radius: 6px;
    color: 'white';
    height: 48px;
    min-width: 120px;
    font-weight: 600;
    font-family: Inter;
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
      background: #1d54ad;
    }
`

export const ButtonWarning = styled(ButtonDefault) `
  background: red !important;
`

export const ButtonSubmit = styled(ButtonDefault) `
  background: green !important;
`

