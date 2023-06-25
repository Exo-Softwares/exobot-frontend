import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  top: 0px;
  z-index: 3;
  background: ${(props) => props.theme.colors.background};
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: center;
    align-items: center;
    color: white;

    .brand {
      @keyframes loadingBrand {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }

      width: 90px;
      height: auto;

      animation: 3s loadingBrand infinite;
    }

    p {
      display: flex;
      gap: 10px;

      @keyframes spinner {
        to {
          transform: rotate(360deg);
        }
      }

      .spinner:before {
        margin-top: 3px;
        content: '';
        box-sizing: border-box;
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border-top: 4px solid ${(props) => props.theme.colors.primary};
        border-right: 5px solid transparent;
        animation: spinner 0.6s linear infinite;
      }
    }
  }

  footer {
    padding: 40px;

    p {
      span {
        color: white;
      }

      strong {
        font-weight: initial;
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`
