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
      gap: 50px;
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

      .hero-banner {
        display: flex;
        max-width: 100%;
        min-width: 450px;
        gap: 60px;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-bottom: 40px;

        @media (max-width: 800px) {
          justify-content: center;
          min-width: unset;
          width: 100%;
        }

        @media (max-width: 406px) {
          display: none;
        }

        .background {
          @keyframes animatedBackground {
            0% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.3;
            }
            100% {
              opacity: 0.2;
            }
          }

          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 100%;
          background: ${(props) => props.theme.colors.primary};
          z-index: -1;
          opacity: 0.3;
          filter: blur(120px);
          animation: 3s animatedBackground infinite;
        }

        .column {
          @keyframes animatedColumn {
            0% {
              bottom: 40px;
            }
            50% {
              bottom: 20px;
            }
            100% {
              bottom: 40px;
            }
          }

          display: flex;
          flex-direction: column;
          gap: 25px;
          animation: 3s animatedColumn infinite;
          position: relative;

          &:nth-child(2) {
            margin-top: 40px;
          }
        }
      }
    }
  }
`
