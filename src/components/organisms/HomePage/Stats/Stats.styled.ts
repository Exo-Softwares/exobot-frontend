/* Stats Component Styles */

/* General Imports */
import styled from 'styled-components';

export const StatsStyles = styled.div `
  .info-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-top: 70px;
    flex-wrap: wrap;
  }

  .info-container {
    flex: 1;
    background: #1c1c1c;
    border-radius: 6px;
    height: 150px;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px;
    transition: 0.2s all;
    cursor: default;
  }

  .info-container:hover {
    scale: 1.02;
    border: 1px solid #1775e1;
  }

  .info-container h1 {
    font-size: 22px;
    color: white;
  }

  .info-container p {
    font-size: 18px;
    margin-left: 10px;
    color: hsla(0,0%,100%,.7);
  }

  .stats-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
  }

  .stats-container div {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1775e1;
    box-shadow: 0px 0px 8px 1px #1775e1;
  }
`