/* Reasons Component Styles */

/* General Imports */
import styled from 'styled-components'

export const ReasonCardWrapper = styled.div`
  outline: 1px solid #212121;
  min-width: 300px;
  flex: 1;
  border-radius: 6px;
  transition: 0.2s all;
  cursor: default;

  &:hover {
    scale: 1.02;
    outline: 1px solid white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .reason .reason-image {
    background-size: cover;
    flex: 1;
  }

  .reason-content {
    padding: 25px;
  }

  .reason-content p {
    margin-top: 15px;
  }
`
