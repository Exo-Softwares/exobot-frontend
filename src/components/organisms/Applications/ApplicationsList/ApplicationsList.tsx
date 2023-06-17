import { RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import ApplicationBuyButton from '../../../molecules/ApplicationBuyButton/ApplicationBuyButton'
import { ApplicationsListWrapper } from './ApplicationsList.styled'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import ConfigModal from '@/components/molecules/ConfigModal/ConfigModal'
import { Application as ApplicationProps } from '@/types/application'
import Application from '@/components/molecules/Application/Application'
import { animated, useTransition } from 'react-spring'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const ApplicationsList = () => {
  const { applicationType, applications } = useSelector(
    (state: RootState) => state.applications,
  )

  // Set which app is being created
  const [appBeingCreated, setAppBeingCreated] =
    useState<ApplicationProps | null>(null)

  // App creation modal animation
  const transition = useTransition(appBeingCreated, {
    from: { x: 0, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 800, opacity: 0 },
  })

  // Prevent user from scrolling when creating application
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const config = document.getElementById('config')

      const targetElement: HTMLElement = config!

      if (appBeingCreated) {
        window.scrollTo({ top: 0 })
        disableBodyScroll(targetElement)
      } else {
        enableBodyScroll(targetElement)
      }
    }
  }, [appBeingCreated])

  return (
    <ApplicationsListWrapper>
      {transition(
        (style, item) =>
          item && (
            <animated.div className="test" style={style}>
              <ConfigModal
                setAppBeingCreated={setAppBeingCreated}
                appBeingCreated={item}
              />
            </animated.div>
          ),
      )}

      {/* {appBeingCreated && (

      )} */}

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
