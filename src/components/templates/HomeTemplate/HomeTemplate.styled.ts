/* Home Page General Styles */

import styled from "styled-components";

export const HomeTemplateWrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 80px;
    padding-bottom: 100px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 53%,
      rgba(13, 13, 13, 1) 100%
    );
    @media (max-width: 1100px) {
      padding-top: 0px;
    }
  }
`;
