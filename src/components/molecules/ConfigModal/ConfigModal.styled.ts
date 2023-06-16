import styled from 'styled-components'

export const ConfigModalWrapper = styled.div`
  width: 80%;
  background: blue;
  z-index: 9999;
  position: absolute;
  margin-top: -150px;
  padding: 30px 140px;
  border-radius: 12px;
  background: rgba(17, 17, 17, 0.99);
  outline: 1px solid ${(props) => props.theme.colors.cardOutline};
  box-shadow: ${(props) => props.theme.colors.accentColor} 0px 5px 15px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1100px) {
    padding: 30px 80px;
  }

  @media (max-width: 728px) {
    padding: 30px 40px;
  }

  header {
    margin-bottom: 40px;

    .options {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 40px;

      .icon {
        cursor: pointer;
        font-size: 30px;

        &:hover {
          color: white;
        }
      }
    }

    .steps {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      position: relative;

      .progression {
        height: 2px;
        background: ${(props) => props.color};
        background: linear-gradient(
          90deg,
          ${(props) => props.color} 0%,
          rgba(17, 17, 17, 1) 100%
        );
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        transition: all 0.2s;
      }

      .step {
        width: 45px;
        height: 45px;
        outline: 1px solid ${(props) => props.color};
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 1000;
        color: white;
        position: relative;
        transition: all 0.2s;

        &:nth-child(3) {
          &.active {
            &::after {
              content: none;
            }
          }
        }

        &.active {
          background: ${(props) => props.color};
          z-index: 10;
        }

        &.completed {
          background: ${(props) => props.color};
          z-index: 10;
        }
      }
    }
  }

  form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .app-profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70%;
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

      .form-control {
        width: 100%;
        margin-top: 10px;
      }
    }

    button {
      display: flex;
      margin-top: 80px;
    }
  }
`
