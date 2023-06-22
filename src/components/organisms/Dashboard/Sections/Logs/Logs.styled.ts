import styled from 'styled-components'

export const LogsWrapper = styled.section`
  .log-wrapper {
    width: 100%;

    .log-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;

      .input-control {
        max-width: 200px;
      }
    }

    .table {
      ::-webkit-scrollbar {
        width: 3px;
      }

      ::-webkit-scrollbar-track {
        background: none;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: #6e6e6e;
      }
    }
  }
`
