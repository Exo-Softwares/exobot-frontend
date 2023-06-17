import styled from 'styled-components'

export const MobileMenuWrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 90px);
  position: absolute;
  background: ${(props) => props.theme.colors.background};
`
