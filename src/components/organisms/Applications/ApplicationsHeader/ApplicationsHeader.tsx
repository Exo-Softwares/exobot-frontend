import Title from '@/components/atoms/Title'
import { ApplicationsHeaderWrapper } from './ApplicationsHeader.styled'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, RootState } from '@/store/store'

const ApplicationsHeader = () => {
  const { applicationType } = useSelector(
    (state: RootState) => state.applications,
  )

  const dispatch = useDispatch<Dispatch>()

  const setApplicationType = (applicationType: boolean) => {
    dispatch.applications.setApplicationType(applicationType)
  }

  const { user } = useSelector((state: RootState) => state.user)

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
