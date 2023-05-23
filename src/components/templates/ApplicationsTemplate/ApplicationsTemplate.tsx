/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Container } from "../../../styles/globals";
import { TitleBold } from "../../atoms/Titles";
import ApplicationBuyButton from "../../organisms/Applications/ApplicationBuyButton/ApplicationBuyButton";
import {
  ApplicationsTemplateWrapper,
} from "./ApplicationsTemplate.styled";

const ApplicationsTemplate = (props: any) => {
  const [yourApplications, setYourApplications] = useState(true)
  const [modApplications, setModApplications] = useState(false)

  return (
    <Container>
      <ApplicationsTemplateWrapper>
        <TitleBold margin="0px 0px 30px 0px">Olá, Teste</TitleBold>

        {/* Switch Page */}
        <div className="switches-wrapper">
          <div className={`switch ${yourApplications ? "active" : ""}`} onClick={() => {setYourApplications(!yourApplications); setModApplications(!modApplications)}}>
            Suas aplicações
          </div>
          <div className={`switch ${modApplications ? "active" : ""}`} onClick={() => {setModApplications(!modApplications); setYourApplications(!yourApplications)}}>
            Aplicações que você modera
          </div>
        </div>
    
        {
          yourApplications === true && (
            <div className="your-applications">
              <ApplicationBuyButton />
            </div>
          )
        }

        {
          modApplications === true && (
            <p>AAAAAAAA</p>
          )
        }
      </ApplicationsTemplateWrapper>
    </Container>
  );
};

export default ApplicationsTemplate;
