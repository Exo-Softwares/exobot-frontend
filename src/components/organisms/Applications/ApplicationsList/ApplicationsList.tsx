import { RootState } from '@/store/store'
import { useState } from 'react'
import ApplicationBuyButton from '../../../molecules/ApplicationBuyButton/ApplicationBuyButton'
import { ApplicationsListWrapper } from './ApplicationsList.styled'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import ConfigModal from '@/components/molecules/ConfigModal/ConfigModal'
import { Application as ApplicationProps } from '@/types/application'
import Application from '@/components/molecules/Application/Application'

const ApplicationsList = () => {
  const { applicationType, applications } = useSelector(
    (state: RootState) => state.applications,
  )

  const [appBeingCreated, setAppBeingCreated] =
    useState<ApplicationProps | null>(null)

  return (
    <ApplicationsListWrapper>
      {appBeingCreated && (
        <ConfigModal
          setAppBeingCreated={setAppBeingCreated}
          appBeingCreated={appBeingCreated}
        />
      )}

      {applicationType === false ? (
        <div className="your-applications">
          {applications.map((application, index) => (
            <Application
              onClick={(e) => setAppBeingCreated(application)}
              key={index}
              {...{ application }}
            />
          ))}

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
