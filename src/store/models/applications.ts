import { createModel } from '@rematch/core'
import { RootModel } from '.'
import axios from 'axios'
import { Application } from '@/types/application'
import { io } from 'socket.io-client'

interface ApplicationState {
  applicationType: boolean
  applicationActive: null | any
  applications: Application[]
}

const initialState: ApplicationState = {
  applicationType: false,
  applicationActive: null,
  applications: [],
}

export const applications = createModel<RootModel>()({
  name: 'applications',
  state: initialState,
  reducers: {
    SET_APPLICATION_TYPE: (state, payload) => {
      return {
        ...state,
        applicationType: payload,
      }
    },
    SET_APPLICATIONS: (state, payload) => {
      return {
        ...state,
        applications: payload,
      }
    },
    SET_APPLICATION_ACTIVE: (state, payload) => {
      return {
        ...state,
        applicationActive: payload,
      }
    },
  },
  effects: (dispatch) => ({
    async setApplicationType(applicationType: boolean) {
      dispatch.applications.SET_APPLICATION_TYPE(applicationType)
    },
    async getApplicationsAsync() {
      try {
        const { data } = await axios.get('/applications/me')
        dispatch.applications.SET_APPLICATIONS(data)
      } catch (err) {
        console.log(err)
        dispatch.applications.SET_APPLICATIONS([])
      }
    },

    async setApplicationAsync(applicationId: string) {
      return new Promise((resolve) => {
        const socket = io('ws://localhost:3001/application?type=user', {
          withCredentials: true,
        })

        const onConnect = () => {
          console.log('Socket connected')
          socket.emit('connectionUser', { applicationId })
        }

        const onDisconnect = () => {
          console.log('Socket disconnected')
        }

        const onInfoBot = (data: any) => {
          console.log(data)
          dispatch.applications.SET_APPLICATION_ACTIVE({
            applicationId,
            ...data,
          })
          resolve(data)
        }

        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)
        socket.on('infoBot', onInfoBot)

        return () => {
          socket.off('connect', onConnect)
          socket.off('disconnect', onDisconnect)
          socket.off('infoBot', onInfoBot)
        }
      })
    },
  }),
})
