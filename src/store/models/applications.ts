import { createModel } from '@rematch/core'
import { RootModel } from '.'
import axios from 'axios'
import { Application } from '@/types/application'

interface ApplicationState {
  applicationType: boolean
  applications: Application[]
}

const initialState: ApplicationState = {
  applicationType: false,
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
  }),
})
