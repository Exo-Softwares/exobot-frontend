/* eslint-disable react/jsx-key */
/* Applications Component */

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "next-auth";
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

  console.log(props)
  return (
    <ApplicationsStyles>
      <ApplicationsWrapper>
        <TitleBold>Olá, {props.user.user?.name}</TitleBold>
        <div className="applications-controls">
          {props.initialBots?.map((value) => (
            value.createdAt ? <ApplicationActiveButton /> : <ApplicationCreateButton {...value}/>
          ))}
          <ApplicationBuyButton />
        </div>
      </ApplicationsWrapper>
    </ApplicationsStyles>
  );
};

export default ApplicationsPage;
