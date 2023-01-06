/* Application Active Button Component (Mainly used at applications page) */

/* Atoms Imports */
import { TitleLight } from "../../../atoms/Titles"

/* Font Awesome Imports */
import { faPlus, faRobot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ApplicationActiveButtonStyles } from "./ApplicationActiveButton.styled"

const ApplicationActiveButton = () => {
  return (
      <ApplicationActiveButtonStyles>
        <div className="application-wrapper">
          <div className="icon-container">
            <div className="icon">

            </div>
          </div>
          <div className="text-container">
            <TitleLight fontSize='20px'>Ativar aplicação</TitleLight>
            <p>Clique aqui para ativar a sua aplicação.</p>
          </div>  
        </div>
        <div className="application-plan">
          <p>ADVANCED</p>
        </div>
    </ApplicationActiveButtonStyles>
  )
}

export default ApplicationActiveButton