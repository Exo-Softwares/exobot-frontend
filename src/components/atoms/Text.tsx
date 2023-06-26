import styled from 'styled-components'

export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};

  strong {
    color: #c9c9c9;
  }

  &.thin {
    font-weight: 400;
  }

  &.medium-text {
    font-size: 22px;
  }
`
