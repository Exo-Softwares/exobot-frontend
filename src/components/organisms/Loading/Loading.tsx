import Image from 'next/image'
import { LoadingWrapper } from './Loading.styled'
import brandSmallLogo from '@/assets/brand/brandSmallLogo.png'
import Text from '@/components/atoms/Text'
import { useContext } from 'react'
import { LoadingContext } from '@/contexts/LoadingContext'

const Loading = () => {
  const { message } = useContext(LoadingContext)

  return (
    <LoadingWrapper>
      <div className="content">
        <Image className="brand" alt="Exobot" src={brandSmallLogo} />
        <Text>{message || 'Carregando informações...'}</Text>
      </div>
    </LoadingWrapper>
  )
}

export default Loading
