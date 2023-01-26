/* Reasons Component Styles */

/* General Imports */
import styled from 'styled-components';

export const ReasonCardStyles = styled.div `
  background: #1c1c1c;
  min-width: 300px;
  flex: 1;
  border-radius: 6px;
  transition: 0.2s all;
  cursor: default;

  &:hover {
    scale: 1.02;
    outline: 1px solid #1775e1;
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
