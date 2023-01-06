/* eslint-disable react/jsx-key */
/* Applications Component */

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "next-auth";
import { useState } from "react";
import { ServerProps } from "../../../pages/applications";
import { TitleBold, TitleLight } from "../../atoms/Titles";
import ApplicationActiveButton from "../../organisms/Applications/ApplicationActiveButton/ApplicationActiveButton";
import ApplicationBuyButton from "../../organisms/Applications/ApplicationBuyButton/ApplicationBuyButton";
import ApplicationCreateButton from "../../organisms/Applications/ApplicationCreateButton/ApplicationCreateButton";



/* Styles Imports */
import {
  ApplicationsStyles,
  ApplicationsWrapper,
} from "./ApplicationsPage.styled";

const ApplicationsPage = (props: ServerProps) => {

  const [yourApplications, setYourApplications] = useState(true)
  const [modApplications, setModApplications] = useState(false)

  const handleYourApplications = () => {
    yourApplications === false ? setYourApplications(true) : setYourApplications(true)
    modApplications === true && setModApplications(false)
  }

  const handleModApplications = () => {
    modApplications === false ? setModApplications(true) : setModApplications(true)
    yourApplications === true && setYourApplications(false)
  }

  

  return (
    <ApplicationsStyles>
      <ApplicationsWrapper>
        <TitleBold margin="0px 0px 30px 0px">Olá, {props.user.user?.name}</TitleBold>

        {/* Switch Page */}
        <div className="switches-wrapper">
          <div className={`switch ${yourApplications ? "active" : ""}`} onClick={handleYourApplications}>
            Suas aplicações
          </div>
          <div className={`switch ${modApplications ? "active" : ""}`} onClick={handleModApplications}>
            Aplicações que você modera
          </div>
        </div>
    
        {
          yourApplications === true && (
            <div className="your-applications">
              {props.initialBots?.map((value) => (
                value.createdAt ? <ApplicationActiveButton /> : <ApplicationCreateButton {...value}/>
              ))}
              <ApplicationBuyButton />
            </div>
          )
        }

        {
          modApplications === true && (
            <p>AAAAAAAA</p>
          )
        }

      </ApplicationsWrapper>
    </ApplicationsStyles>
  );
};

export default ApplicationsPage;
