/* eslint-disable react/jsx-key */
import "./Pricing.styled";
import { PricingWrapper } from "./Pricing.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Title from "@/components/atoms/Title";
import { pricingData } from "@/data/pricingContent";
import Button from "@/components/atoms/Button";

const Pricing = () => {
  return (
    <PricingWrapper>
      <div className="pricing-wrapper">
        <Title weight="light" fontSize="30px">
          Qual desses <strong>mais combina com a sua necessidade</strong>
          <span>?</span>
        </Title>
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
                    <FontAwesomeIcon className="icon" icon={faCheck} />{" "}
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="panel-bottom">
                <Button icon="RiArrowRightLine">Continuar</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PricingWrapper>
  );
};

export default Pricing;
