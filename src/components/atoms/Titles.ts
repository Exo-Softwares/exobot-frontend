/* Title Styles */

/* General Imports */
import styled from "styled-components";

interface Props {
    fontSize?: string;
    margin?: string;
    color?: string;
    center?: boolean;
}

export const TitleBold = styled.h1 <Props> `
    font-size: ${props => props.fontSize ? props.fontSize : '40px'};
    font-weight: 600;
    text-align: ${props => props.center ? 'center' : 'initial'};
    margin: ${props => props.margin ? props.margin : 'initial'};
    color: ${props => props.color ? props.color : 'auto'};

    span {
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: ${props => props.theme.colors.primary};
    }
`

export const TitleLight = styled(TitleBold) `
    font-weight: lighter;

    span {
        background: linear-gradient(120deg, ${props => props.theme.colors.primary}, #161616);
        padding: 6px;
        border-radius: 4px;
        font-weight: 600;
        text-decoration: none;
    }
`