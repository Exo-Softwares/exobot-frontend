/* Hero Component Styles */

/* General Imports */
import styled from "styled-components";

export const HeroWrapper = styled.div`
  margin-bottom: 100px;

  .hero-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .hero-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      .description {
        color: #888;
        font-weight: 500;
        margin-bottom: 60px;
      }
    }
  }
`;
