import { Title } from '@/components/atoms/Title'
import useAuth from '@/hooks/useAuth'
import { ApplicationsHeaderWrapper } from './ApplicationsHeader.styled'

const ApplicationsHeader = () => {
  const { user, applicationType, setApplicationType } = useAuth()

  return (
    <ApplicationsHeaderWrapper>
      <Title className="white-colored thin">
        Olá, <strong>{user?.username}</strong>
        <span>.</span>
      </Title>
      <div className="switches-wrapper">
        <div className="active-wrapper">
          <div
            className="active"
            style={{ left: !applicationType ? '0px' : '50%' }}
          />
        </div>
        <div
          className="switch"
          onClick={() => {
            applicationType === true
              ? setApplicationType(!applicationType)
              : setApplicationType(applicationType)
          }}
        >
          Suas aplicações
        </div>
        <div
          className="switch"
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
