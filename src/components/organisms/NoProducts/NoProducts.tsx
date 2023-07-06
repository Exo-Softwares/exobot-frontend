import { Text } from '@/components/atoms/Text'
import { NoProductsWrapper } from './NoProducts.styled'
import { MdOutlineNearbyOff } from 'react-icons/md'
import { Title } from '@/components/atoms/Title'
import Button from '@/components/atoms/Button'
import Link from 'next/link'

const NoProducts = () => {
  return (
    <NoProductsWrapper>
      <div className="background" />
      <div className="icon-wrapper">
        <div className="animated-bar" />
        <MdOutlineNearbyOff className="icon" />
      </div>

      <Title className="white-colored">
        Você chegou muito cedo<span>!</span>
      </Title>
      <Text>
        Nenhum produto foi encontrado, <span>tente novamente</span> mais tarde.
      </Text>

      <Link href="/">
        <Button>Ir para a página principal</Button>
      </Link>
    </NoProductsWrapper>
  )
}

export default NoProducts
