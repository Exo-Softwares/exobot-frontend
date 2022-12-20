/* Title Styles */

/* General Imports */
import styled from "styled-components";

export const HeadTitle = styled.h1 `
    font-size: 40px;
    font-weight: 600;
    text-align: center;

    span {
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: #1775e1;
    }
`

export const SubTitle = styled.h2 `
    margin-top: 30px;
    font-weight: 400;
    font-size: 22px;
    text-align: center;

    span {
        background: linear-gradient(120deg, #21456e, #0e325c, #161616);
        padding: 6px;
        border-radius: 4px;
        font-weight: 600;
    }
`