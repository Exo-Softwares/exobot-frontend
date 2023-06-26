import { Text } from '@/components/atoms/Text'
import { NoApplicationsWrapper } from './NoApplications.styled'
import { FaBoxOpen } from 'react-icons/fa'
import Title from '@/components/atoms/Title'

const NoApplications = () => {
  return (
    <NoApplicationsWrapper>
      <FaBoxOpen className="icon" />
      <Title>
        Você chegou muito cedo<span>!</span>
      </Title>
      <Text>
        Nenhum produto foi encontrado, <span>tente novamente</span> mais tarde.
      </Text>
    </NoApplicationsWrapper>
  )
}

export default NoApplications
