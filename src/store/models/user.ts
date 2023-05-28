import { createModel } from '@rematch/core'
import axios from 'axios'
import { setCookie } from 'nookies'

import { RootModel } from '.'
import { User } from '../../types/user'

interface UserState {
  authenticated: boolean
  user: User | null
}

const initialState: UserState = {
  authenticated: false,
  user: null,
}

export const user = createModel<RootModel>()({
  name: 'user',
  state: initialState,
  reducers: {
    SET_USER: (state, payload) => {
      return {
        ...state,
        authenticated: true,
        user: payload,
      }
    },
    LOGOUT: (state) => {
      return {
        ...state,
        authenticated: false,
        user: null,
      }
    },
  },
  effects: (dispatch) => ({
    async logoutAsync() {
      try {
        await axios.delete('/auth/discord/logout')
        dispatch.user.LOGOUT()
      } catch (err) {
        dispatch.user.LOGOUT()
      }
    },
    async getUserProfileAsync() {
      try {
        const { data } = await axios.get('/user/me')
        await setCookie(undefined, 'discord.accessToken', data.accessToken, {
          // qto tempo quero manter esse cokkie salvo no meu navegador
          maxAge: 60 * 60 * 24 * 30, // 30 dias
          path: '/', // quais caminhos da minha aplicacao tem cesso ao cookie ('/' = todos)
        })
        dispatch.user.SET_USER(data)
      } catch (err) {
        dispatch.user.LOGOUT()
      }
    },
    async reconnect() {
      const ms = 2000
      const recInterval = setInterval(async () => {
        try {
          const { data } = await axios.get('/user/me')
          console.log(data)
          dispatch.user.SET_USER(data.user)
          console.log('Reconnected')
          clearInterval(recInterval)
        } catch (err) {
          console.log(`Reconnection attempt failed`)
        }
      }, ms)
    },
  }),
})
