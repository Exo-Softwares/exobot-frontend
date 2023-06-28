import Avatar from '@/components/atoms/Avatar'
import { Title } from '@/components/atoms/Title'
import Link from 'next/link'
import { ImArrowLeft2 } from 'react-icons/im'
import { SimpleNavbarWrapper } from './SimpleNavbar.styled'

const SimpleNavbar = () => {
  return (
    <SimpleNavbarWrapper>
      <div className="back-container">
        <Link href="/applications">
          <ImArrowLeft2 className="icon" />
        </Link>
        <Title className="medium-title application-title">
          Nome da aplicação
        </Title>
      </div>
      <div className="stuff">
        <div className="avatar-container">
          <Avatar />
        </div>
      </div>
    </SimpleNavbarWrapper>
  )
}

export default SimpleNavbar
