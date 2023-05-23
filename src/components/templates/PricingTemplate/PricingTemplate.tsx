/* eslint-disable react/jsx-key */
import {
  faCcAmex,
  faCcDinersClub,
  faCcMastercard,
  faCcVisa,
  faPix,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Router from "next/router";
import { useState } from "react";
import { pricingData, pricingType } from "../../../data/pricingContent";
import { Container } from "../../../styles/globals";
import { ButtonDefault } from "../../atoms/Buttons";
import { TitleBold, TitleLight } from "../../atoms/Titles";
import Faq from "../../organisms/HomePage/Faq/Faq";
import {
  Benefit,
  PricingContent,
  PricingHeader,
  PricingShowcase,
  PricingSidebar,
  PricingTemplateWrapper,
  PricingWrapper,
  TitleWrapper,
} from "./PricingTemplate.styled";

const PricingTemplate = () => {
  const [page, setPage] = useState(0);

  const checkout = async (active: pricingType) => {
    try {
      await document.getElementById("teste")?.setAttribute("disabled", "true");
      const res = await fetch(`http://localhost:3000/api/checkout/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(active),
      });
      const data = await res.json();
      Router.push(data.body.init_point);
    } catch (err) {
      console.log(err);
    }
  };

  let active = pricingData[page];

  return (
    <Container>
      <PricingTemplateWrapper>
        <PricingHeader mainColor={active.mainColor}>
          <TitleWrapper mainColor={active.mainColor}>
            <TitleBold fontSize="50px">{active.name}</TitleBold>
          </TitleWrapper>
          <div className="line" />
          <div className="navigation-wrapper">
            {/* Next Button */}
            <ButtonDefault
              background="#2e2e2e"
              color="white"
              padding="12px 35px"
              width="100%"
              disabled={page === 0 ? true : false}
              onClick={() => {
                setPage(page - 1);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span className="prev">Anterior</span>
            </ButtonDefault>

            {/* Previous Button */}
            <ButtonDefault
              background="#2e2e2e"
              color="white"
              padding="12px 35px"
              width="100%"
              disabled={page === 2 ? true : false}
              onClick={() => {
                setPage(page + 1);
              }}
            >
              <span className="next">Próximo</span>{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </ButtonDefault>
          </div>
        </PricingHeader>
        <PricingWrapper>
          <PricingContent>
            <TitleLight fontSize="24px" margin="0px 0px 40px 0px">
              {active.description}
            </TitleLight>

            {/* Benefits */}
            <div className="benefits-container">
              {active.benefits?.map((benefit) => (
                <Benefit mainColor={active.mainColor}>
                  <FontAwesomeIcon width={20} className="icon" icon={faCheck} />{" "}
                  {benefit}{" "}
                </Benefit>
              ))}
            </div>

            {/* Showcase */}
            <PricingShowcase mainColor={active.mainColor}>
              <div className="section">
                <div className="title">
                  <p>
                    <span>/ </span> Tenha um bot exclusivo
                  </p>
                </div>
                <div className="content">
                  <p>Algo único, diferente de todos e feito do seu jeito.</p>
                </div>
              </div>
            </PricingShowcase>
          </PricingContent>
          <PricingSidebar mainColor={active.mainColor}>
            {/* Prices and CTA */}
            <div className="price-wrapper">
              <div className="price">
                <p>
                  R$
                  <span>
                    {String(active.price.toFixed(2)).replace(".", ",")}
                  </span>
                </p>
              </div>
              <p id="monthly">
                cobrança
                <br /> mensal
              </p>
            </div>

            <div className="payment-methods">
              <p>Métodos de pagamento</p>
              <div className="icons">
                <FontAwesomeIcon
                  title="VISA"
                  className="icon"
                  icon={faCcVisa}
                />
                <FontAwesomeIcon
                  title="MasterCard"
                  className="icon"
                  icon={faCcMastercard}
                />
                <FontAwesomeIcon
                  title="DinersClub"
                  className="icon"
                  icon={faCcDinersClub}
                />
                <FontAwesomeIcon
                  title="AMEX"
                  className="icon"
                  icon={faCcAmex}
                />
                <FontAwesomeIcon title="PIX" className="icon" icon={faPix} />
              </div>
              <p>e outros...</p>
            </div>

            {false ? (
              <ButtonDefault
                id="teste"
                width="100%"
                onClick={() => checkout(active)}
              >
                Ir para o pagamento
              </ButtonDefault>
            ) : (
              <ButtonDefault id="teste" width="100%" onClick={() => {}}>
                Fazer login
              </ButtonDefault>
            )}
            <p className="disclaimer">Pagamentos processados com segurança</p>
          </PricingSidebar>
        </PricingWrapper>
        <Faq />
      </PricingTemplateWrapper>
    </Container>
  );
};

export default PricingTemplate;
