import styled from 'styled-components'

export const ApplicationsHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .switches-wrapper {
    width: 100%;
    background: ${(props) => props.theme.colors.accentColor};
    border-radius: 15px;
    padding: 6px;
    display: flex;
    position: relative;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;

    .active-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      padding: 5px;
      z-index: 1;
    }

    .active {
      position: relative;
      width: 50%;
      background: ${(props) => props.theme.colors.cardOutline};
      height: 100%;
      border-radius: 15px;
      transition: all 0.2s ease-out;
    }

    .switch {
      padding: 10px;
      color: white;
      width: 100%;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      cursor: pointer;
      z-index: 1;

      @media (max-width: 1100px) {
        min-height: 75px;
      }
    }
  }
`
