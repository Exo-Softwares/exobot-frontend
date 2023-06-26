import { Text } from '@/components/atoms/Text'
import { NoProductsWrapper } from './NoProducts.styled'
import { FaBoxOpen } from 'react-icons/fa'
import { Title } from '@/components/atoms/Title'

const NoProducts = () => {
  return (
    <NoProductsWrapper>
      <FaBoxOpen className="icon" />
      <Title>
        Você chegou muito cedo<span>!</span>
      </Title>
      <Text>
        Nenhum produto foi encontrado, <span>tente novamente</span> mais tarde.
      </Text>
    </NoProductsWrapper>
  )
}

export default NoProducts
