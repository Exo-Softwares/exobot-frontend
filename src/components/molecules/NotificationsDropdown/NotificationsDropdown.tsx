import Title from '@/components/atoms/Title'
import { NotificationsDropdownWrapper } from './NotificationsDropdown.styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { Icon } from '@/components/atoms/Icon'

const NotificationsDropdown = () => {
  const { notifications } = useSelector(
    (state: RootState) => state.notifications,
  )

  return (
    <NotificationsDropdownWrapper>
      <header>
        <Title weight="regular" fontSize="18px">
          Suas notificações <span>({notifications.length})</span>
        </Title>
      </header>
      <div className="notifications">
        {notifications.map((notification, index) => (
          <div key={index} className="notification">
            <div className="icon-container">
              <Icon
                propsIcon={{ className: 'icon' }}
                nameIcon="BsPatchExclamationFill"
              />
            </div>
            <div className="content">
              <Title className="title" fontSize="15px">
                {notification.category}
              </Title>
              {notification.content}
            </div>
          </div>
        ))}
      </div>
    </NotificationsDropdownWrapper>
  )
}

export default NotificationsDropdown
