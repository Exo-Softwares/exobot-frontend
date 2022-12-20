/* Reasons Component Styles */

/* General Imports */
import styled from 'styled-components';

export const ReasonsStyles = styled.div `
  .hero-reasons {
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 40px;

    flex-wrap: wrap;
  }

  .hero-reasons::after {
    content: '';
    display: block;
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, #161616, #1775e1, #161616);
    border-radius: 50px;
    margin: 0 auto;
    margin-top: 40px;
  }

  .reason {
    background: #1c1c1c;
    min-width: 300px;
    flex: 1;
    border-radius: 6px;
    transition: 0.2s all;
    cursor: default;
  }

  .reason:hover {
    scale: 1.02;
    border: 1px solid #1775e1;
  }

  .reason .reason-image {
    background-size: cover;
    flex: 1;
  }

  .reason-content {
    padding: 25px;
  }

  .reason-content h1 {
    color: white;
    font-size: 23px;
    font-weight: 500;
  }

  .reason-content h1 span {
    font-size: 24px;
    color: #1775e1;
  }

  .reason-content p {
    margin-top: 15px;
    font-size: 18px;
    color: hsla(0,0%,100%,.7);
  }
`
