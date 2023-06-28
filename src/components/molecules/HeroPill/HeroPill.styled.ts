import styled from 'styled-components'

export const HeroPillWrapper = styled.div`
  background: rgb(17, 17, 17);
  background: linear-gradient(
    90deg,
    rgba(17, 17, 17, 1) 61%,
    rgba(20, 20, 20, 1) 100%
  );
  padding: 8px 22px;
  border-radius: 4px;
  font-size: 22px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: default;
  transition: 0.2s all;

  @media (max-width: 500px) {
    font-size: 18px;
  }

  &:hover {
    transform: scale(1.2);
    border: 1px solid ${(props) => props.theme.colors.primary};
  }

  .ball {
    left: -8px;
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: rgb(50, 17, 107);
    background: linear-gradient(
      90deg,
      rgba(50, 17, 107, 1) 0%,
      rgba(122, 56, 235, 1) 100%
    );
  }
`
