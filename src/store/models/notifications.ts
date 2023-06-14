import { createModel } from '@rematch/core'
import { RootModel } from '.'
import { io } from 'socket.io-client'
import { NotificationProps } from '@/types/notification'

interface NotificationState {
  notifications: Array<NotificationProps>
}

const initialState: NotificationState = {
  notifications: [],
}

export const notifications = createModel<RootModel>()({
  name: 'notifications',
  state: initialState,
  reducers: {
    SET_NOTIFICATIONS: (state, payload) => {
      return {
        ...state,
        notifications: payload,
      }
    },
    ADD_NOTIFICATION: (state, payload) => {
      return {
        ...state,
        notifications: [...state.notifications, payload],
      }
    },
  },
  effects: (dispatch) => ({
    async getNotifications() {
      try {
        const socket = io('ws://localhost:3001/notification', {
          withCredentials: true,
        })

        if (!socket) {
          dispatch.notifications.SET_NOTIFICATIONS([])
          return
        }

        socket.on('connect', () => {
          console.log('Socket connected')
        })

        socket.on('disconnect', () => {
          console.log('Socket disconnected')
        })

        socket.on(
          'notifications:all',
          (notifications: Array<NotificationProps>) => {
            dispatch.notifications.SET_NOTIFICATIONS(notifications)
          },
        )

        socket.on('createNotification', (notification: NotificationProps) => {
          dispatch.notifications.ADD_NOTIFICATION(notification)
        })

        return () => {
          socket.off('connect')
          socket.off('disconnect')
          socket.off('error')
        }
      } catch (err) {
        dispatch.notifications.SET_NOTIFICATIONS([])
      }
    },
  }),
})
