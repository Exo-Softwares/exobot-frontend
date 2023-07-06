import io, { Socket } from 'socket.io-client'

let socket: Socket

export function connectSocket() {
  socket = io('http://localhost:3000')
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect()
  }
}

export function getSocket() {
  return socket
}
