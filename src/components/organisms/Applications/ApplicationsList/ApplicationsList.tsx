import { RootState } from '@/store/store'
import ApplicationBuyButton from '../../../molecules/ApplicationBuyButton/ApplicationBuyButton'
import { ApplicationsListWrapper } from './ApplicationsList.styled'
import { useSelector } from 'react-redux'

const ApplicationsList = () => {
  const { applicationType } = useSelector(
    (state: RootState) => state.applications,
  )

  // const dispatch = useDispatch<Dispatch>()

  return (
    <ApplicationsListWrapper>
      {applicationType === false ? (
        <div className="your-applications">
          <ApplicationBuyButton />
        </div>
      ) : (
        <p>asdasd</p>
      )}
    </ApplicationsListWrapper>
  )
}

export default ApplicationsList
