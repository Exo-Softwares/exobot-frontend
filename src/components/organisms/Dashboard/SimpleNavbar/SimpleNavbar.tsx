import Avatar from '@/components/atoms/Avatar'
import { SimpleNavbarWrapper } from './SimpleNavbar.styled'
import { Icon } from '@/components/atoms/Icon'

const SimpleNavbar = () => {
  return (
    <SimpleNavbarWrapper>
      <div className="back-container">
        <Icon nameIcon="ImArrowLeft2" propsIcon={{ className: 'icon' }} />
      </div>
      <div className="avatar-container">
        <Avatar />
      </div>
    </SimpleNavbarWrapper>
  )
}

export default SimpleNavbar
