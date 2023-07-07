import io, { Socket } from 'socket.io-client'

let socket: Socket

export function connectSocket(accessToken: string) {
  if (!socket)
    socket = io(`${process.env.BACKEND_URL}/dashboard?p=user`, {
      auth: {
        token: accessToken,
      },
    })
}

export function disconnectSocket() {
  if (socket) socket.disconnect()
}

export function getSocket() {
  return socket
}
