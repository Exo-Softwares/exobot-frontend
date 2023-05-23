/* eslint-disable react/jsx-key */
import "./Pricing.styled";
import { PricingWrapper } from "./Pricing.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { TitleLight } from "../../../atoms/Titles";
import { ButtonDefault } from "../../../atoms/Buttons";
import { pricingData } from "../../../../data/pricingContent";

const Pricing = () => {
  return (
    <PricingWrapper>
      <div className="pricing-wrapper">
        <TitleLight fontSize="30px">
          Qual desses <span>mais combina com a sua necessidade</span>?
        </TitleLight>
        <div className="panels-container">
          {pricingData.map((plan) => (
            <div className="panel">
              <header className="panel-header">
                <div className={`title-wrapper ${plan.name.toLowerCase()}`}>
                  <h1>{plan.name}</h1>
                </div>
                <div className="price-wrapper">
                  <p>
                    <span>R$</span>
                    {plan.price}
                  </p>
                  <p id="monthly">cobrança mensal</p>
                </div>
              </header>
              <div className="panel-benefits">
                {plan.benefits.map((benefit) => (
                  <div className="benefit">
                    <FontAwesomeIcon icon={faCheck} /> <p>{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="panel-bottom">
                <ButtonDefault
                  margin="30px 0px 0px 0px"
                  padding="22px"
                  width="100%"
                >
                  Continuar
                </ButtonDefault>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PricingWrapper>
  );
};

export default Pricing;
