import Router from 'next/router'
import { ApplicationBuyButtonStyles } from './ApplicationBuyButton.styled'
import Title from '@/components/atoms/Title'
import Text from '@/components/atoms/Text'
import { Icon } from '@/components/atoms/Icon'

const ApplicationBuyButton = () => {
  return (
    <ApplicationBuyButtonStyles onClick={() => Router.push('/pricing')}>
      <div className="icon-container">
        <Icon
          propsIcon={{ className: 'icon' }}
          nameIcon="RiShoppingCart2Fill"
        />
      </div>
      <div className="text-container">
        <Title weight="regular">Adquirir aplicação</Title>
        <Text fontSize="1em">
          Comparar planos e adquirir uma nova aplicação.
        </Text>
      </div>
    </ApplicationBuyButtonStyles>
  )
}

export default ApplicationBuyButton
