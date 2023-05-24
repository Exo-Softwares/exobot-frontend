/* Home Page General Styles */

import styled from "styled-components";

export const HomeTemplateWrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 80px;
    padding-bottom: 100px;

    @media (max-width: 1100px) {
      padding-top: 0px;
    }
  }
`;
