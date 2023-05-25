import Router from "next/router";
import { faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ApplicationBuyButtonStyles } from "./ApplicationBuyButton.styled";

const ApplicationBuyButton = () => {
  return (
    <ApplicationBuyButtonStyles onClick={() => Router.push("/pricing")}>
      <div className="icon-container">
        <FontAwesomeIcon className="icon" size="2xl" icon={faCartShopping} />
      </div>
      <div className="text-container">
        <p>Comparar planos e adquirir uma nova aplicação.</p>
      </div>
    </ApplicationBuyButtonStyles>
  );
};

export default ApplicationBuyButton;
