import Avatar from '@/components/atoms/Avatar'
import { SimpleNavbarWrapper } from './SimpleNavbar.styled'
import Title from '@/components/atoms/Title'
import Link from 'next/link'
import Notifications from '@/components/atoms/Notifications'
import { ImArrowLeft2 } from 'react-icons/im'

const SimpleNavbar = () => {
  return (
    <SimpleNavbarWrapper>
      <div className="back-container">
        <Link href="/applications">
          <ImArrowLeft2 className="icon" />
        </Link>
        <Title className="application-title">Nome da aplicação</Title>
      </div>
      <div className="stuff">
        <div className="notification-container">
          <Notifications />
        </div>
        <div className="avatar-container">
          <Avatar />
        </div>
      </div>
    </SimpleNavbarWrapper>
  )
}

export default SimpleNavbar
