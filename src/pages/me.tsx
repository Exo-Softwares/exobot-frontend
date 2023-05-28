import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { AuthOption, withAuth } from '../utils/withAuth'
import React from 'react'

interface MeProps {}

// eslint-disable-next-line no-empty-pattern
const Me: React.FC<MeProps> = ({}) => {
  const { user } = useSelector((state: RootState) => state.user)

  console.log(user)
  return <main>{user?.username}</main>
}

export default withAuth(AuthOption.REQUIRED, Me)
