/* Pricing Page General Styles */

import styled from 'styled-components';

interface Props {
    mainColor?: string;
}


export const TitleContainer = styled.div <Props>`
    background: linear-gradient(90deg, #161616, ${props => props.mainColor});
    padding: 3px     20px;
    border-radius: 8px;

    h1 {
        color: white;
    }
`

export const Benefit = styled.p <Props> `
    font-size: 20px;
    margin-bottom: 30px;

    .icon {
        color: ${props => props.mainColor};
        margin-right: 6px;
    }

    &:last-child {
        margin-bottom: 0px;
    }
`

export const PricingPageStyles = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding-top: 80px;
    padding-bottom: 80px;
`

export const PricingHeader = styled.div <Props> `
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 60px;

    .line {
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, ${props => props.mainColor}, #161616);
    }

    .navigation-wrapper {
        display: flex;
        flex-direction: row;
        margin-left: auto;
    }

    .navigation-wrapper button {    
        margin-left: 10px;
    }

    .navigation-wrapper button .next {
        margin-right: 10px;
    }

    .navigation-wrapper button .prev {
        margin-left: 10px;
    }
`
export const PricingWrapper = styled.div `
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
    height: 100%;
`

export const PricingContent = styled.div `
    display: flex;
    flex-direction: column;
    flex: 1;

    .benefits-container {
        display: flex;
        flex-direction: column;
    }
`

export const PricingSidebar = styled.aside <Props> `
  position: sticky;
  bottom: 20%;
  align-self: flex-end;
    flex-direction: column;
    display: flex;
    width: 400px;
    border-radius: 8px;
    padding: 30px;
    background: #1a1a1a;

    button {
        margin-top: 60px;
        height: 74px;
    }

    .price-wrapper {
        width: 100%;
        margin-bottom: 20px; 
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    #monthly {
        font-size: 17px;
    }

    .price-wrapper p {
        font-size: 18px;
    }

    .price-wrapper p span {
        font-size: 40px;
        font-weight: bold;
    }

    .disclaimer {
        margin-top: 20px;
        color: #4f4f4f;
        text-align: center;
        font-size: 13px;
    }

    .payment-methods {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .payment-methods p {
        margin-bottom: 20px;
        font-size: 17px;    
        color: #5e5e5e;
    }

    .payment-methods .icons .icon {
        font-size: 30px;
        margin-right: 20px;
        color: #474747;
    }

    .payment-methods .icons .icon:last-child {
        margin-right: 0px;
    }
`

export const PricingShowcase = styled.div <Props> `
    margin-top: 40px;
    width: 100%;
    height: 900px;

    .title {
        width: 100%;
        height: 60px;
        border-radius: 12px;
        background: #1a1a1a;
        display: flex;
        align-items: center;
        padding-left: 20px;
    }

    .title p {
        font-size: 20px;
    }

    .title p span {
        color: ${props => props.mainColor}
    }

    .content {
        margin-top: 20px;
        padding-left: 20px;
    }

    .content p {
        font-size: 17px;
    }
`