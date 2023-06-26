/* Hero Component Styles */

/* General Imports */
import styled from 'styled-components'

export const HeroWrapper = styled.div`
  margin-bottom: 100px;

  .hero-wrapper {
    background: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .hero-content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 40px;
      flex-direction: row;

      @media (max-width: 500px) {
        flex-direction: column;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: start;
        color: white;
        flex: 1;

        .description {
          margin-top: 10px;
          margin-bottom: 60px;
        }
      }

      .image {
        display: flex;
        flex: 1;
        max-width: 100%;
        height: auto;
        min-width: 450px;

        @media (max-width: 500px) {
          min-width: unset;
        }

        img {
          width: 100%;
          height: max-content;
        }
      }
    }
  }
`
