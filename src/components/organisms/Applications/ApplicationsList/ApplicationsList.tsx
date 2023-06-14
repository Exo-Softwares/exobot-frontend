import { RootState } from '@/store/store'
import ApplicationBuyButton from '../../../molecules/ApplicationBuyButton/ApplicationBuyButton'
import { ApplicationsListWrapper } from './ApplicationsList.styled'
import { useSelector } from 'react-redux'
import Link from 'next/link'

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

          <Link href="/dashboard">
            <div>asdad</div>
          </Link>
        </div>
      ) : (
        <p>asdasd</p>
      )}
    </ApplicationsListWrapper>
  )
}

export default ApplicationsList
