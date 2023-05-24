/* Button Styles */

/* General Imports */
import styled from "styled-components";

interface Props {
  width?: string;
  background?: string;
  color?: string;
  margin?: string;
  padding?: string;
}

export const ButtonPurple = styled.button<Props>`
  padding: ${(props) => (props.padding ? props.padding : "13px 18px")};
  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 6px;
  color: ${(props) => (props.color ? props.color : "white")};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  font-size: 15px;
  font-weight: 700;
  font-family: Inter;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background: none;
    outline: 1px solid ${(props) => props.theme.colors.primary};
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export const ButtonWhite = styled(ButtonPurple)`
  background: white !important;
  color: black;

  &:hover {
    background: none !important;
    color: white;
    outline: 1px solid white;
  }
`;

export const ButtonWarning = styled(ButtonPurple)`
  background: red !important;
`;

export const ButtonSubmit = styled(ButtonPurple)`
  background: green !important;
`;
