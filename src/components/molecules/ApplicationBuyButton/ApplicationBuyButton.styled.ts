/*  Application Buy Button Component Styles */

/* General Imports */
import styled from 'styled-components'

export const ApplicationBuyButtonStyles = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 120px;
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  padding: 20px 30px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: 0.2s all;
  outline: 1px solid #292929;

  &:hover {
    scale: 1.02;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.colors.cardOutline};
    padding: 10px;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.text};

    .icon {
      color: #707070;
      width: 35px;
      height: 35px;
    }
  }
`
