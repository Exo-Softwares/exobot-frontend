import styled from 'styled-components'

export const DashWrapper = styled.section`
  .general-container {
    .content-section {
      display: flex;
      justify-content: space-between;
      flex-direction: row !important;
      gap: 60px !important;

      .app-profile {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 20px;

        @media (max-width: 728px) {
          justify-content: center;
        }

        .app-avatar {
          width: 130px;
          height: 130px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #050505;
          border-radius: 100%;
          cursor: pointer;

          .icon {
            color: #3d3d3d;
            font-size: 70px;
          }

          &:hover {
            .icon {
              color: #adadad;
            }
          }
        }

        .app-data {
          display: flex;
          flex-direction: column;
          align-items: center;

          .title {
            color: white;
          }

          .id {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #404040;
            font-size: 18px !important;
          }
        }
      }

      .dash-info {
        display: flex;
        justify-content: space-between;
        flex: 1;
        gap: 30px;
      }

      .server-info {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;

        .info {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
  }
`
