/* Hero Component Styles */

/* General Imports */
import styled from 'styled-components';

export const HeroStyles = styled.div `

  .hero-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .hero-text {
    display: inline-block;
  }

  .hero-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .hero-content h1 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }

  .hero-content h1 span {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-color: #1775e1;
  }

  .hero-content p {
    margin-top: 30px;
    font-size: 22px;
    text-align: center;
  }

  .hero-content p span {
    background: linear-gradient(120deg, #21456e, #0e325c, #161616);
    padding: 6px;
    border-radius: 4px;
    font-weight: 600;
  }

  .hero-content button {
    padding: 8px;
    background: #1775e1;
    border: none;
    border-radius: 6px;
    color: white;
    height: 48px;
    min-width: 150px;
    max-width: 150px;
    font-weight: 600;
    font-family: Inter;
    cursor: pointer;
    transition: 0.2s all;
    margin-top: 20px;
  }

  .hero-content button:hover {
    background: #1d54ad;
  }

  .hero-objects {
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 40px;

    flex-wrap: wrap;
  }

  .hero-objects::after {
    content: '';
    display: block;
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, #161616, #1775e1, #161616);
    border-radius: 50px;
    margin: 0 auto;
    margin-top: 40px;
  }

  .object {
    background: #1c1c1c;
    min-width: 300px;
    flex: 1;
    border-radius: 6px;
    transition: 0.2s all;
    cursor: default;
  }

  .object:hover {
    scale: 1.02;
    border: 1px solid #1775e1;
  }

  .object .object-image {
    background-size: cover;
    flex: 1;
  }

  .object-content {
    padding: 25px;
  }

  .object-content h1 {
    color: white;
    font-size: 23px;
    font-weight: 500;
  }

  .object-content h1 span {
    font-size: 24px;
    color: #1775e1;
  }

  .object-content p {
    margin-top: 15px;
    font-size: 18px;
    color: hsla(0,0%,100%,.7);
  }
`