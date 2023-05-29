import { RootState } from '@/store/store'
import { MouseEventHandler } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const AvatarWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url();
  background-position: center;
  background-size: cover;
  border-radius: 70%;
  cursor: pointer;
  transition: 0.1s all;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 15px 15px,
      rgba(0, 0, 0, 0.3) 0px 0px 15px 15px;
  }
`

interface AvatarProps {
  onClick?: MouseEventHandler
}

const Avatar = ({ onClick }: AvatarProps) => {
  const { user } = useSelector((state: RootState) => state.user)
  return (
    <AvatarWrapper
      onClick={onClick}
      style={{
        backgroundImage: `url(https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.jpg)`,
      }}
    />
  )
}

export default Avatar
