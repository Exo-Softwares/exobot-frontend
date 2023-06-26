import Title from '@/components/atoms/Title'
import useAuth from '@/hooks/useAuth'
import { ApplicationsHeaderWrapper } from './ApplicationsHeader.styled'

const ApplicationsHeader = () => {
  const { user, applicationType, setApplicationType } = useAuth()

  return (
    <ApplicationsHeaderWrapper>
      <Title weight="light" fontSize="35px">
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
