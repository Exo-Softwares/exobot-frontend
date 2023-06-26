import useAuth from '@/hooks/useAuth'
import { useScrollLock } from '@/hooks/useScrollLock'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import AvatarDropdown from '../molecules/AvatarDropdown/AvatarDropdown'
import { Icon } from './Icon'

export const AvatarWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #050505;
  border-radius: 70%;
  overflow: hidden;
  transition: 0.1s all;
  display: flex;

  justify-content: center;

  .avatar {
    width: 100%;
    height: 100%;
    display: flex;
    background-position: center;
    background-size: cover;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;

    .avatar-icon {
      font-size: 35px;
      margin-top: 15px;
    }
  }

  .border {
    width: 120%;
    height: 120%;
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.colors.primary};
    position: absolute;

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 15px 15px,
        rgba(0, 0, 0, 0.3) 0px 0px 15px 15px;
    }
  }

  .animated-div {
    display: flex;
    top: 63px;
    background: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.cardOutline};
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    position: absolute;
    width: fit-content;
    cursor: default;
    z-index: 3;

    @media (max-width: 1100px) {
      right: 0px;
    }
  }
`

interface AvatarProps {
  onClick?: MouseEventHandler
}

const Avatar = ({ onClick }: AvatarProps) => {
  const { user } = useAuth()

  // Handle avatar dropdown status
  const [avatarDropdownStatus, setAvatarDropdownStatus] = useState(false)

  // Close dropdown when clicking outside
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
  }, [avatarDropdownStatus])

  // Animate dropdown
  const transition = useTransition(avatarDropdownStatus, {
    from: { x: 0, y: 200, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 200, opacity: 0 },
  })

  // Prevent user from scrolling when avatar dropdown is open
  const { lockScroll, unlockScroll } = useScrollLock()

  useEffect(() => {
    if (avatarDropdownStatus) {
      if (typeof window !== 'undefined') lockScroll()

      return
    }
    unlockScroll()
  }, [avatarDropdownStatus])

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
        <div className="border"></div>
        {user?.avatar === null ||
          (user?.avatar === undefined && (
            <>
              <Icon
                nameIcon="FaUser"
                propsIcon={{ className: 'avatar-icon' }}
              />
            </>
          ))}
      </div>
      {transition(
        (style, item) =>
          item && (
            <animated.div className="animated-div" style={style}>
              <AvatarDropdown />
            </animated.div>
          ),
      )}
    </AvatarWrapper>
  )
}

export default Avatar
