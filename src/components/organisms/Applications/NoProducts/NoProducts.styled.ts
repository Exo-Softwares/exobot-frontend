import styled from 'styled-components'

export const NoProductsWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: 100%;
  padding-top: 170px;

  .icon {
    font-size: 120px;
    margin-bottom: 20px;
  }

  h2 {
    color: white;
    font-weight: 600;

    span {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  p {
    font-weight: 300;
    font-size: 20px;

    span {
      color: #e8e8e8;
    }
  }
`