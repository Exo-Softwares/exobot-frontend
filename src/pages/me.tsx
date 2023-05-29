import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { AuthOption, withAuth } from '../utils/withAuth'
import React from 'react'

// eslint-disable-next-line no-empty-pattern
const Me = ({}) => {
  const { user } = useSelector((state: RootState) => state.user)

  const { notifications } = useSelector(
    (state: RootState) => state.notifications,
  )
  console.log(notifications)
  return <main>{user?.username}</main>
}

export default withAuth(AuthOption.REQUIRED, Me)
