import Loading from '@/components/organisms/Loading/Loading'
import api from '@/lib/axios'
import { User } from '@/types/user'
import axios from 'axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface Guild {
  features: any[]
  icon?: string
  id: string
  name: string
  owner: boolean
  permissions: number
  permissions_new: string
}

interface AuthData {
  user: User | null
  login: () => void
  logout: () => void
  authenticated: boolean
  guilds: Guild[]
  loading: boolean
}

interface authProps {
  children: ReactNode
}

interface TokenMessage {
  accessToken: string
}

export const authContext = createContext({} as AuthData)

export const TestProvider = ({ children }: authProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [guilds, setGuilds] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const getUserProfileAsync = async () => {
      const response = await api('/user/me')
      if (response.status === 401) return
      const data = response.data
      setUser(data)
      setAuthenticated(true)
    }

    const getUserGuilds = async () => {
      if (!authenticated) return
      const res = await axios.get('https://discord.com/api/users/@me/guilds', {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      })

      const guilds = res.data
      setGuilds(guilds)
    }

    const loadUser = async () => {
      try {
        setLoading(true)
        await getUserProfileAsync()
        await getUserGuilds()
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false) // Definir como false independentemente de sucesso ou erro
      }
    }

    loadUser()
  }, [authenticated])

  const login = () => {
    if (authenticated) logout()
    const url =
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      'https://discord.com/api/oauth2/authorize?' +
      new URLSearchParams({
        client_id: '1016481594573344859',
        redirect_uri: `http://localhost:3000/api/auth/callback`,
        response_type: 'code',
        scope: 'identify guilds',
      })

    const maxWidth = 1000 // Largura máxima da janela
    const maxHeight = 800 // Altura máxima da janela

    const width = Math.min(maxWidth, window.innerWidth * 0.8) // Largura responsiva
    const height = Math.min(maxHeight, window.innerHeight * 0.8) // Altura responsiva

    const left = window.screenX + (window.innerWidth - width) / 2
    const top = window.screenY + (window.innerHeight - height) / 2

    const windowFeatures = `modal=yes,width=${width},height=${height},left=${left},top=${top}`

    const newWindow = window.open(url, '_blank', windowFeatures)
    if (newWindow) {
      newWindow.focus()
    }

    const handleEvent = async (event: MessageEvent<TokenMessage>) => {
      const { accessToken } = event.data
      // Faça o que for necessário com o token de acesso recebido
      localStorage.setItem('exobot.access_token', accessToken)

      setAuthenticated(true)
    }

    window.addEventListener('message', handleEvent)

    return () => {
      window.removeEventListener('message', handleEvent)
    }
  }

  const logout = () => {
    try {
      localStorage.removeItem('exobot.access_token')
      setUser(null)
      setGuilds(null)
      setAuthenticated(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <authContext.Provider
      value={{ user, login, authenticated, guilds, logout, loading }}
    >
      {!loading ? children : <Loading />}
    </authContext.Provider>
  )
}
