/* Application Buy Button Component */

/* Atoms Imports */
import { TitleLight } from "../../../atoms/Titles"
import Router from 'next/router'
/* Font Awesome Imports */
import { faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ApplicationBuyButtonStyles } from "./ApplicationBuyButton.styled"



const ApplicationBuyButton = () => {
  return (
    <ApplicationBuyButtonStyles onClick={() => Router.push('/pricing')}>
      <div className="icon-container">
        <FontAwesomeIcon className='icon' size='2xl' icon={faCartShopping} />
      </div>
      <div className="text-container">
        <TitleLight fontSize='20px'>Adquirir aplicação</TitleLight>
        <p>Comparar planos e adquirir uma nova aplicação.</p>
      </div>
    </ApplicationBuyButtonStyles>
  )
}

export default ApplicationBuyButton