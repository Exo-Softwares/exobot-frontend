import styled from 'styled-components'

export const GeneralWrapper = styled.section`
  .general-container {
    .content-section {
      .input-group {
        .input-control {
          display: flex;
          flex-direction: column;
          width: 100%;

          label {
            span {
              color: ${(props) => props.theme.colors.primary};
            }
          }

          input {
            width: 100%;
            margin-top: 4px;
            background: #212121;
            padding: 0.4em 0.2em 0.4em 0.6em;
            border: none;
            color: white;
            outline: none;
            font-size: 18px;
            border-radius: 4px;
            border: 1px solid ${(props) => props.theme.colors.cardOutline};
          }
        }
      }
    }
  }
`
