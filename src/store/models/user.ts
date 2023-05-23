import { createModel } from '@rematch/core'
import axios, { AxiosError } from 'axios'

import { RootModel } from '.'
import { User } from '../../types/user'

interface UserState {
    authenticated: boolean,
    user: User | null
}

const initialState: UserState = {
    authenticated: false,
    user: null
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
        }
    },
    effects: (dispatch) => ({
        async socialLoginAsync() {
            let { data } = await axios.get('/user/me')
            dispatch.user.SET_USER(data.user)
        },
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
                let { data } = await axios.get('/user/me')
                dispatch.user.SET_USER(data)
            } catch (err) {
                dispatch.user.LOGOUT()
            }
        },
        async reconnect() {
            const ms = 2000
            const recInterval = setInterval( async () => {
                try {
                    let { data } = await axios.get('/user/me')
                    console.log(data)
                    dispatch.user.SET_USER(data.user)
                    console.log('Reconnected')
                    clearInterval(recInterval)
                } catch (err) {
                    console.log(`Reconnection attempt failed`)
                }
            }, ms)
        }
    })
})