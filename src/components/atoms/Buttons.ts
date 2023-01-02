/* Button Styles */

/* General Imports */
import styled from "styled-components";

interface Props {
  width: string;
  background?: string;
  color?: string;
  margin?: string;
  padding?: string;
}

export const ButtonDefault = styled.button<Props> `
    padding: ${props => props.padding ? props.padding : '16px'};
    background: ${props => props.background ? props.background : 'white'};
    border: none;
    border-radius: 6px;
    color: ${props => props.color ? props.color : 'black'};
    margin: ${props => props.margin};
    width: ${props => props.width};
    font-size: 15px;
    font-weight: 500;
    font-family: Inter;
    cursor: pointer;
    transition: 0.2s all;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      opacity: 0.3;
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

