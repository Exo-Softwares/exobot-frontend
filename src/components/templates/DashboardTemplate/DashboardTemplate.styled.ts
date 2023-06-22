import styled from 'styled-components'

export const DashboardTemplateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  .container {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-track {
      background: none;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: ${(props) => props.theme.colors.primary};
    }

    .wrapper {
      padding-right: 15vw;
      padding-left: 4vw;

      @media (max-width: 1100px) {
        padding: 0px 4vw;
      }

      .content {
        min-height: calc(100vh - 120px);

        section {
          display: flex;
          flex-direction: column;
          gap: 30px;

          .section-title {
            margin-bottom: 10px;
            color: white;
          }

          .general-container {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }

          .section-content {
            background: ${(props) => props.theme.colors.accentColor};
            padding: 20px 30px;
            border-radius: 8px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            gap: 30px;

            button {
              max-width: 200px;
              margin-top: 60px;
            }

            .field-group {
              display: flex;
              flex-direction: column;
              gap: 20px;
            }

            .input-group {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 4em;

              @media screen and (max-width: 1200px) {
                grid-template-columns: 1fr;
              }
            }

            @media screen and (max-width: 728px) {
              button {
                width: 100%;
                max-width: unset;
              }
            }
          }
        }
      }
    }

    .footer {
      .container {
        padding: 0;
        padding-right: 15vw;
        padding-left: 4vw;
      }
    }
  }
`
