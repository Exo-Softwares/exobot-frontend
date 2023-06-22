import styled from 'styled-components'

export const ApplicationWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  padding: 20px 30px;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.1px);
  -webkit-backdrop-filter: blur(11.1px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  left: 0px;
  z-index: -1;
  transition: 0.2s all;
  color: white;
  cursor: pointer;
  transition: 0.2s all;
  position: relative;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 728px) {
    padding: 14px 20px;
  }

  &:hover {
    transform: scale(1.02);

    .new-badge {
      &::after {
        z-index: 1;
      }
    }

    .background {
      opacity: 0.1;
    }
  }

  .background {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 100%;
    background: ${(props) => props.color};
    opacity: 0;
    border-radius: 100%;
    filter: blur(50px);
    right: -50px;
    z-index: -1;
    transition: opacity 0.5s;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.colors.cardOutline};
    padding: 10px;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.text};

    .icon {
      color: #707070;
      width: 35px;
      height: 35px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
      color: ${(props) => props.theme.colors.text};
    }

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;

      .type {
        padding: 1px 10px;
        background: ${(props) => props.color};
        border-radius: 4px;
      }

      @media (max-width: 728px) {
        align-items: start;
        flex-direction: column;
        gap: 2px;
      }
    }
  }

  .new-badge {
    width: 30px;
    height: 54px;
    position: absolute;
    top: 0px;
    right: 28px;
    margin-top: -5px;
    border-bottom-left-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.color};
    z-index: 1;

    .icon {
      font-size: 24px;
      z-index: 10;
    }

    &::after {
      position: absolute;
      width: 30px;
      height: 54px;
      margin-left: 10px;
      margin-bottom: 2px;
      z-index: -100;
      content: '';
      background: ${(props) => props.color};
      opacity: 0.4;
    }
  }
`
