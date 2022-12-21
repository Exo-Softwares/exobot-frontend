/* Title Styles */

/* General Imports */
import styled from "styled-components";

interface Props {
    fontSize?: string;
    marginTop?: string;
    marginBottom?: string;
}

export const TitleBold = styled.h1 <Props> `
    font-size: ${props => props.fontSize ? props.fontSize : '40px'};
    font-weight: 600;
    text-align: center;
    margin-top: ${props => props.marginTop ? props.marginTop : 'none'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : 'none'};

    span {
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: #1775e1;
    }
`

export const TitleLight = styled(TitleBold) `
    font-weight: lighter;

    span {
        background: linear-gradient(120deg, #21456e, #0e325c, #161616);
        padding: 6px;
        border-radius: 4px;
        font-weight: 600;
        text-decoration: none;
    }
`