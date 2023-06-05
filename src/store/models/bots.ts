import { createModel } from '@rematch/core'
import axios from 'axios'

import { BotProps } from '@/types/bot'
import { RootModel } from '.'

interface BotState {
  bots: BotProps[]
}

const initialState: BotState = {
  bots: [],
}

export const bots = createModel<RootModel>()({
  name: 'bots',
  state: initialState,
  reducers: {
    SET_BOTS: (state, payload) => {
      return {
        ...state,
        bots: payload,
      }
    },
  },
  effects: (dispatch) => ({
    async getBotsAsync() {
      try {
        const { data } = await axios.get('/bot/findAll')
        console.log(data)
        dispatch.bots.SET_BOTS(data)
      } catch (err) {
        console.log(err)
        dispatch.bots.SET_BOTS([])
      }
    },
  }),
})
