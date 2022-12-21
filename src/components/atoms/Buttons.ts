/* Button Styles */

/* General Imports */
import styled from "styled-components";

interface Props {
  width: string;
  marginTop?: string;
  padding?: string;
}

export const ButtonDefault = styled.button<Props> `
    padding: ${props => props.padding ? props.padding : '16px'};
    background: white;
    border: none;
    border-radius: 6px;
    color: black;
    margin-top: ${props => props.marginTop};
    width: ${props => props.width};
    font-weight: 600;
    font-family: Inter;
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
      background: #c9c9c9;
    }
`

export const ButtonCTA = styled(ButtonDefault) `
    background: #1775e1;
    color: white;

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

