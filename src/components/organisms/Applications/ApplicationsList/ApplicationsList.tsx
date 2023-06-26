import Application from '@/components/molecules/Application/Application'
import ConfigModal from '@/components/molecules/ConfigModal/ConfigModal'
import { AuthContext } from '@/contexts/AuthContext'
import { Application as ApplicationProps } from '@/types/application'
import { useScrollLock } from '@/utils/scrollLock'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import ApplicationBuyButton from '../../../molecules/ApplicationBuyButton/ApplicationBuyButton'
import { ApplicationsListWrapper } from './ApplicationsList.styled'

const ApplicationsList = () => {
  const { user, applicationType } = useContext(AuthContext)

  const router = useRouter()

  // Set which app is being created
  const [appBeingCreated, setAppBeingCreated] =
    useState<ApplicationProps | null>(null)

  const setConfigApplication = (applicationId: string) => {
    router.push(`dashboard/?p=${applicationId}`)
  }

  // App creation modal animation
  const transition = useTransition(appBeingCreated, {
    from: { x: 0, y: 400, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 400, opacity: 0 },
  })

  // Prevent user from scrolling when creating application
  const { lockScroll, unlockScroll } = useScrollLock()

  useEffect(() => {
    if (appBeingCreated) {
      if (typeof window !== 'undefined') window.scrollTo(0, 0)
      lockScroll()

      return
    }
    unlockScroll()
  }, [appBeingCreated])

  return (
    <ApplicationsListWrapper>
      {transition(
        (style, item) =>
          item && (
            <animated.div className="animated-modal" style={style}>
              <ConfigModal
                setAppBeingCreated={setAppBeingCreated}
                appBeingCreated={item}
              />
            </animated.div>
          ),
      )}

      {applicationType === false ? (
        <div className="your-applications">
          {user?.applications.map((application, index) => (
            <Application
              onClick={(e) => {
                application.expiredAt
                  ? setConfigApplication(application.id)
                  : setAppBeingCreated(application)
              }}
              key={index}
              {...{ application }}
            />
          ))}
        </div>
      ) : (
        <p>asdasd</p>
      )}

      <ApplicationBuyButton />
    </ApplicationsListWrapper>
  )
}

export default ApplicationsList
