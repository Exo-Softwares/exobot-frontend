/* Title Styles */

/* General Imports */
import styled from "styled-components";

interface Props {
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  color?: string;
  center?: boolean;
}

export const TitleBold = styled.h1<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "40px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  text-align: ${(props) => (props.center ? "center" : "initial")};
  margin: ${(props) => (props.margin ? props.margin : "initial")};
  color: ${(props) => (props.color ? props.color : "auto")};
  text-align: center;

  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const TitleLight = styled(TitleBold)`
  font-weight: lighter;

  span {
    color: white;
  }

  @media (max-width: 1100px) {
    line-height: 1.8;
  }
`;
