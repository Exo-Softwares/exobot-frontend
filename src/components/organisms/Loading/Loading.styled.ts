import styled from 'styled-components'

export const LoadingWrapper = styled.div`
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

  top: 0px;
  z-index: 3;
  background: ${(props) => props.theme.colors.background};
  position: absolute;
  width: 100vw;
  height: 100vh;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    color: white;

    .brand {
      width: 90px;
      height: auto;

      animation: 3s loadingBrand infinite;
    }
  }
`
