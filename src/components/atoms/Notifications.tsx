import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Icon } from './Icon'
import NotificationsDropdown from '../molecules/NotificationsDropdown/NotificationsDropdown'
import { RootState } from '@/store/store'
import { NotificationProps } from '@/types/notification'

const NotificationsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      font-size: 30px;
      cursor: pointer;

      &:hover {
        color: white;
      }
    }
  }

  .new-notification-ball {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #b03e3e;
    bottom: 8px;
    right: 2px;
    border-radius: 100%;
  }
`

const Notifications = () => {
  const { notifications } = useSelector(
    (state: RootState) => state.notifications,
  )

  // Handle notifications dropdown (& close menu when clicking outside container)
  const [notificationsDropdownStatus, setNotificationsDropdownStatus] =
    useState(false)

  const notificationsMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationsMenuRef.current &&
        !notificationsMenuRef.current.contains(event.target as Node)
      ) {
        setNotificationsDropdownStatus(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <NotificationsWrapper ref={notificationsMenuRef}>
      {' '}
      <div
        onClick={() => {
          setNotificationsDropdownStatus(!notificationsDropdownStatus)
        }}
        className="icon-container"
      >
        <Icon
          nameIcon={
            notifications.filter(
              (notification: NotificationProps) => !!notification.readAt,
            ).length > 0
              ? 'IoIosNotifications'
              : notificationsDropdownStatus === true
              ? 'IoIosNotifications'
              : 'IoIosNotificationsOutline'
          }
          propsIcon={{ className: 'icon' }}
        />
      </div>
      {notifications
        .sort((a, b) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        })
        .filter((notification: NotificationProps) => !!notification.readAt)
        .length > 0 && <div className="new-notification-ball" />}
      {notificationsDropdownStatus && <NotificationsDropdown />}
    </NotificationsWrapper>
  )
}

export default Notifications
