import { NoApplicationsWrapper } from './NoApplications.styled'
import { FaBoxOpen } from 'react-icons/fa'

const NoApplications = () => {
  return (
    <NoApplicationsWrapper>
      <FaBoxOpen className="icon" />
      <h2>
        Você chegou muito cedo<span>!</span>
      </h2>
      <p>
        Nenhum produto foi encontrado, <span>tente novamente</span> mais tarde.
      </p>
    </NoApplicationsWrapper>
  )
}

export default NoApplications
