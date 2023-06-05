import styled from 'styled-components'

export const DashWrapper = styled.section`
  .general-container {
    .content-section {
      display: flex;
      justify-content: space-between;

      .app-profile {
        display: flex;
        flex-direction: row;
        gap: 20px;

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
      }

      .server-info {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;

        .info {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }

      .app-info {
        display: flex;
        flex-direction: column;
        gap: 10px;

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
  }
`
