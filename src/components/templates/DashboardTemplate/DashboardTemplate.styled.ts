import styled from 'styled-components'

export const DashboardTemplateWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  .container {
    width: 100%;
    height: 100%;
    padding-right: 15vw;
    padding-left: 4vw;

    @media screen and (max-width: 1200px) {
      padding-right: 2vw;
    }

    .content-wrapper {
      .content {
        .content-title {
          margin-bottom: 30px;
          color: white;
        }

        .content-section {
          background: ${(props) => props.theme.colors.accentColor};
          padding: 20px 30px;
          border-radius: 8px;

          .save-button {
            margin-top: 60px;
            padding: 8px 30px;
            font-size: 16px;
            background: ${(props) => props.theme.colors.primary};
            border-radius: 4px;
            border: none;
            color: white;
            cursor: pointer;
            transition: 80ms all;

            &:hover {
              background: #3f1a7d;
            }
          }

          .input-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4em;

            @media screen and (max-width: 1200px) {
              grid-template-columns: 1fr;
            }
          }
        }
      }
    }
  }
`
