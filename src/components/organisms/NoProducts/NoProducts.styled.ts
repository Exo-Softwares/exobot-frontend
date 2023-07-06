import styled from 'styled-components'

export const NoProductsWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: 100%;
  padding: 130px 0px;

  @media (max-width: 1100px) {
    padding: 130px 15px;
  }

  .background {
    @keyframes animatedBackground {
      0% {
        opacity: 0.1;
      }
      50% {
        opacity: 0.2;
      }
      100% {
        opacity: 0.1;
      }
    }

    position: absolute;
    width: 300px;
    height: 300px;
    background: ${(props) => props.theme.colors.red};
    z-index: -1;
    border-radius: 100%;
    opacity: 0.2;
    filter: blur(50px);
    animation: 3s animatedBackground infinite;
  }

  .icon-wrapper {
    position: relative;
    width: fit-content;
    height: fit-content;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    .animated-bar {
      @keyframes animatedBar {
        0% {
          transform: rotate(135deg) scale(1);
        }
        50% {
          transform: rotate(135deg) scale(1.08);
        }
        100% {
          transform: rotate(135deg) scale(1);
        }
      }

      position: absolute;
      width: 10px;
      top: -3px;
      left: 51px;
      height: 110%;
      background: ${(props) => props.theme.colors.red};
      animation: 3s animatedBar infinite;
    }

    .icon {
      font-size: 120px;
    }
  }

  h1 {
    span {
      color: ${(props) => props.theme.colors.red};
    }
  }

  p {
    font-weight: 300;
    font-size: 20px;

    span {
      color: #e8e8e8;
    }
  }

  button {
    margin-top: 60px;
  }
`
