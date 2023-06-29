import { NotificationContext } from './../contexts/NotificationContext'
import { useContext } from 'react'

export default function useNotification() {
  const context = useContext(NotificationContext)

  return context
}
