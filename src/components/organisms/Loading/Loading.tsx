import brandSmallLogo from '@/assets/brand/brandSmallLogo.png'
import { Text } from '@/components/atoms/Text'
import Image from 'next/image'
import { LoadingWrapper } from './Loading.styled'
import useLoading from '@/hooks/useLoading'

const Loading = () => {
  const { message } = useLoading()

  return (
    <LoadingWrapper>
      <div className="content">
        <Image className="brand" alt="Exobot" src={brandSmallLogo} />
        <Text>
          {message || 'Carregando informações'} <span className="spinner" />
        </Text>
      </div>
      <footer>
        <p>
          <strong>©</strong> 2023 - <span>Exobot</span>
        </p>
      </footer>
    </LoadingWrapper>
  )
}

export default Loading
