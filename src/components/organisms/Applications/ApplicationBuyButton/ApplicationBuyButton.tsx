import Router from 'next/router'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ApplicationBuyButtonStyles } from './ApplicationBuyButton.styled'
import Title from '@/components/atoms/Title'

const ApplicationBuyButton = () => {
  return (
    <ApplicationBuyButtonStyles onClick={() => Router.push('/pricing')}>
      <div className="icon-container">
        <FontAwesomeIcon className="icon" size="2xl" icon={faCartShopping} />
      </div>
      <div className="text-container">
        <Title weight="regular">Adquirir aplicação</Title>
        <p>Comparar planos e adquirir uma nova aplicação.</p>
      </div>
    </ApplicationBuyButtonStyles>
  )
}

export default ApplicationBuyButton
