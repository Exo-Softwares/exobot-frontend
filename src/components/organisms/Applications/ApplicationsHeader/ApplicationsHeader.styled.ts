import styled from "styled-components";

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
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;
  }

  .switches-wrapper .switch {
    padding: 10px;
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    cursor: pointer;
  }

  .active {
    background: ${(props) => props.theme.colors.dark[300]};
    transition: all 0.09s;
  }
`;
