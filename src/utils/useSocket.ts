import { useSelector } from 'react-redux'
import { useSocket } from 'socket.io-react-hook'

import { RootState } from '../store/store'

export const useAuthenticatedSocket = (namespace: string) => {
  const { user, authenticated } = useSelector((state: RootState) => state.user)
  const socket = useSocket(namespace, {
    enabled: !!user && authenticated,
    withCredentials: true,
    reconnectionDelayMax: 10000,
    port: 3001,
    host: 'localhost',
    hostname: 'localhost',
    reconnection: true,
    reconnectionDelay: 2000,
    reconnectionAttempts: 50,
  })
  return socket
}
