import { RootState } from '@/store/store'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Icon } from './Icon'
import AvatarDropdown from '../molecules/AvatarDropdown/AvatarDropdown'

export const AvatarWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background: #050505;
  background-size: cover;
  border-radius: 70%;
  overflow: hidden;
  transition: 0.1s all;

  .avatar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 15px 15px,
      rgba(0, 0, 0, 0.3) 0px 0px 15px 15px;
  }

  .border {
    width: 120%;
    height: 120%;
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.colors.primary};
    position: absolute;
  }

  .avatar-icon {
    font-size: 35px;
    margin-top: 15px;
  }

  .dropdown-container {
  }
`

interface AvatarProps {
  onClick?: MouseEventHandler
}

const Avatar = ({ onClick }: AvatarProps) => {
  const { user } = useSelector((state: RootState) => state.user)

  // Handle avatar dropdown (& close menu when clicking outside container)
  const [avatarDropdownStatus, setAvatarDropdownStatus] = useState(false)

  const avatarMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        avatarMenuRef.current &&
        !avatarMenuRef.current.contains(event.target as Node)
      ) {
        setAvatarDropdownStatus(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <AvatarWrapper ref={avatarMenuRef}>
      <div
        className="avatar"
        style={{
          backgroundImage:
            user?.avatar &&
            `url(https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.jpg)`,
        }}
        onClick={() => setAvatarDropdownStatus(!avatarDropdownStatus)}
      >
        {user?.avatar === null && (
          <>
            <div className="border"></div>
            <Icon nameIcon="FaUser" propsIcon={{ className: 'avatar-icon' }} />
          </>
        )}
      </div>

      <div className="dropdown-container">
        {avatarDropdownStatus && <AvatarDropdown />}
      </div>
    </AvatarWrapper>
  )
}

export default Avatar
