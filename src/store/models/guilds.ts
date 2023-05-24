import { createModel } from '@rematch/core'
import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { RootModel } from '.'


interface GuildState {
    guilds: any[] | [],
}

const initialState: GuildState = {
  guilds: [],
}

export const guilds = createModel<RootModel>()({
    name: 'guilds',
    state: initialState,
    reducers: {
        SET_GUILDS: (state, payload) => {
            return {
                ...state,
                guilds: payload,
            }
        },
    },
    effects: (dispatch) => ({
        async setGuilds() {
            try {
                const { 'discord.accessToken': token } = parseCookies()
                const res = await axios.get('https://discord.com/api/users/@me/guilds', {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  }
                })
                dispatch.guilds.SET_GUILDS(res.data)
                return
            } catch (err: any) {
                console.error(err)
                let axiosError: AxiosError;
                dispatch.guilds.SET_GUILDS([])
                if(err instanceof AxiosError) {
                    axiosError = err.response?.data
                    return axiosError
                }
                return err
            }
        },
    })
})