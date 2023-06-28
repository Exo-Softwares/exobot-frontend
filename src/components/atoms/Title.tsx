import styled from 'styled-components'

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};

  span {
    color: ${(props) => props.theme.colors.secondary};
  }

  strong {
    color: white;
  }

  /* Title Sizing */
  &.small-title {
    font-size: 17px;
  }

  &.medium-title {
    font-size: 27px;
  }

  &.large-title {
    font-size: 36px;
  }

  /* Title Weight */
  &.thin {
    font-weight: 500;
  }

  /* Title Colors */
  &.white-colored {
    color: #ffffff;
  }

  /* Title Themes */

  &.purple-themed {
    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`
