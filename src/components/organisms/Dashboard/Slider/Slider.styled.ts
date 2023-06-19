import styled from 'styled-components'

export const SliderWrapper = styled.nav`
  width: 100%;
  margin-bottom: 60px;
  background: ${(props) => props.theme.colors.accentColor};
  border-radius: 8px;
  overflow: scroll;
  overflow-y: hidden;

  @media (min-width: 1100px) {
    display: none;
  }

  ul {
    display: flex;
    gap: 20px;
    height: 100%;

    li {
      padding: 20px 20px;
      height: 100%;
      display: flex;
      align-items: center;
      white-space: nowrap;
      gap: 10px;
      list-style: none;
      transition: 0.1s all;
      cursor: pointer;

      &.active {
        border-radius: 4px;
        color: white;

        .icon {
          color: ${(props) => props.theme.colors.primary};
        }
      }

      &:hover {
        color: white;
        margin-left: 5px;
      }

      .icon {
        font-size: 25px;
      }
    }
  }
`
