import styled from 'styled-components'

export const ApplicationWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  padding: 20px 30px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: 0.2s all;
  outline: 1px solid #292929;
  position: relative;

  &:hover {
    transform: scale(1.02);

    .new-badge {
      &::after {
        z-index: 1;
      }
    }
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
      z-index: -1;
      content: '';
      background: ${(props) => props.color};
      opacity: 0.4;
    }
  }
`
