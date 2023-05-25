import { faPlus, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ApplicationCreateButtonStyles } from "./ApplicationCreateButton.styled";

const ApplicationCreateButton = (props: any) => {
  return (
    <ApplicationCreateButtonStyles>
      <div className="application-wrapper">
        <div className="icon-container">
          <FontAwesomeIcon className="icon" size="2xl" icon={faRobot} />
        </div>
        <div className="text-container">
          <p>Clique aqui para ativar a sua aplicação.</p>
        </div>
      </div>
      <div className="application-plan">
        <p>{props.plan}</p>
      </div>
    </ApplicationCreateButtonStyles>
  );
};

export default ApplicationCreateButton;
