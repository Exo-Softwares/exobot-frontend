import { Title } from '@/components/atoms/Title'
import { AuthContext } from '@/contexts/AuthContext'
import { useContext } from 'react'
import { ApplicationsHeaderWrapper } from './ApplicationsHeader.styled'

const ApplicationsHeader = () => {
  const { user, applicationType, setApplicationType } = useContext(AuthContext)

  return (
    <ApplicationsHeaderWrapper>
      <Title className="white-colored thin">
        Olá, <strong>{user?.username}</strong>
        <span>.</span>
      </Title>
      <div className="switches-wrapper">
        <div
          className={`switch ${applicationType === false && 'active'}`}
          onClick={() => {
            applicationType === true
              ? setApplicationType(!applicationType)
              : setApplicationType(applicationType)
          }}
        >
          Suas aplicações
        </div>
        <div
          className={`switch ${applicationType === true && 'active'}`}
          onClick={() => {
            applicationType === false
              ? setApplicationType(!applicationType)
              : setApplicationType(applicationType)
          }}
        >
          Aplicações que você modera
        </div>
      </div>
    </ApplicationsHeaderWrapper>
  )
}

export default ApplicationsHeader
