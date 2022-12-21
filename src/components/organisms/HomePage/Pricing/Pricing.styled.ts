/* Pricing Component Styles */

/* General Imports */
import styled from 'styled-components';

export const PricingStyles = styled.div `
  .pricing-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
  }

  .panels-container {
    gap: 40px;
    margin-top: 70px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .panel {
    flex: 1;
    min-width: 290px;
    border-radius: 12px;
    background: #1c1c1c;
    padding: 26px 46px;
  }

  .title-wrapper {
    flex: 1;
    display: flex;
  }

  .standard h1 {
    color: #1775e1;
  }

  .standard::after {
    content: '';
    display: block;
    height: 1px;
    flex: 1;
    margin-left: 10px;
    background: #1775e1;
    border-radius: 50px;
    margin-top: 15px;
  }

  .pro h1 {
    color: #3ccf91;
  }

  .pro::after {
    content: '';
    display: block;
    height: 1px;
    flex: 1;
    margin-left: 10px;
    background: #3ccf91;
    border-radius: 50px;
    margin-top: 15px;
  }

  .advanced h1 {
    color: #ff715b;
  }

  .advanced::after {
    content: '';
    display: block;
    height: 1px;
    flex: 1;
    margin-left: 10px;
    background: #ff715b;
    border-radius: 50px;
    margin-top: 15px;
  }

  .price-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .price-wrapper #monthly {
    font-size: 15px;
    margin-left: 10px;
  }


  .price-wrapper p {
    font-size: 40px;
    font-weight: 600;
    color: white;
  }


  .price-wrapper p span {
    font-size: 18px;
    font-weight: 300;
  }

  .panel-benefits {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
  }

  .benefit {
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #383838;
    padding: 25px 0px;

  }

  .benefit svg {
    color: white;
  }

  .benefit p {
    color: #a6a6a6;
    margin-left: 10px;
  }

`

