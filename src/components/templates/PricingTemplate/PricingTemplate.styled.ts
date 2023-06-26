/* Pricing Page General Styles */

import styled from 'styled-components'

interface Props {
  mainColor?: string
}

export const TitleWrapper = styled.div<Props>`
  background: linear-gradient(90deg, #0a0a0a, ${(props) => props.mainColor});
  padding: 3px 20px;
  border-radius: 8px;

  h1 {
    color: white;
  }
`

export const Benefit = styled.p<Props>`
  font-size: 20px;
  margin-bottom: 30px;

  .icon {
    color: ${(props) => props.mainColor};
    margin-right: 6px;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`

export const PricingTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 80px;

  .container {
    width: 100%;
    height: 100%;
  }
`

export const PricingHeader = styled.div<Props>`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 60px;

  .line {
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, ${(props) => props.mainColor}, #0a0a0a);
  }

  .navigation-wrapper {
    display: flex;
    flex-direction: row;
    margin-left: auto;

    @media (max-width: 1100px) {
      display: none;
    }

    button {
      margin-left: 10px;
      background: #2e2e2e;
      color: white;
      padding: 12px 35px;
      width: 100%;

      &:hover {
        opacity: 0.8;
        outline: none;
      }

      &:disabled {
        opacity: 0.2;
      }

      .next {
        margin-right: 10px;
      }

      .prev {
        margin-left: 10px;
      }
    }
  }
`

export const PricingWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 24px;
  width: 100%;

  .sticky {
    position: sticky;
    top: 100px;
    height: fit-content;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    height: 1450px;
  }
`

export const PricingContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .benefits-container {
    display: flex;
    flex-direction: column;
  }

  .benefits-disclaimer {
    margin-top: 50px;

    &.fivem {
      p {
        svg {
          fill: ${(props) => props.theme.colors.products.fivem};
          path {
          }
        }
      }
    }

    p {
      display: flex;
      align-items: center;
      font-size: 16px;
      gap: 10px;

      svg {
        font-size: 25px;
      }
    }
  }

  .description {
    margin-bottom: 40px;

    @media (max-width: 1100px) {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    flex: 0;
  }
`

export const PricingSidebar = styled.aside<Props>`
  align-self: flex-end;
  flex-direction: column;
  display: flex;
  width: 400px;
  border-radius: 8px;
  padding: 30px;
  background: ${(props) => props.theme.colors.accentColor};

  @media (max-width: 1100px) {
    width: 100%;
    z-index: 99;
  }

  .price-wrapper {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    p {
      font-size: 18px;

      span {
        font-size: 40px;
        font-weight: bold;
      }
    }

    #monthly {
      font-size: 17px;
    }
  }

  .disclaimer {
    margin-top: 20px;
    color: #4f4f4f;
    text-align: center;
    font-size: 13px;
  }

  .payment-methods {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 1100px) {
      display: none;
    }

    p {
      margin-bottom: 20px;
      font-size: 17px;
      color: #5e5e5e;
    }

    .icons .icon {
      font-size: 30px;
      margin-right: 20px;
      color: #474747;

      &:last-child {
        margin-right: 0px;
      }
    }
  }

  button {
    padding: 15px 0px;
  }
`

export const PricingShowcase = styled.div<Props>`
  margin-top: 40px;
  width: 100%;

  .title {
    width: 100%;
    height: 60px;
    border-radius: 12px;
    background: ${(props) => props.theme.colors.accentColor};
    display: flex;
    align-items: center;
    padding-left: 20px;

    p {
      font-size: 20px;

      span {
        color: ${(props) => props.mainColor};
      }
    }
  }

  .content {
    margin-top: 20px;
    padding-left: 20px;

    @media (max-width: 1100px) {
      padding-left: 0px;
    }

    p {
      font-size: 17px;
    }
  }
`
