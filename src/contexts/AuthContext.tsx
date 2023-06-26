import Loading from '@/components/organisms/Loading/Loading'
import api from '@/lib/axios'
import { User } from '@/types/user'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface AuthData {
  user: User | null
  authenticated: boolean
  loading: boolean
  applicationType: boolean
  setApplicationType: (type: boolean) => void
  login: () => void
  logout: () => void
}

interface AuthProps {
  children: ReactNode
}

interface TokenMessage {
  accessToken: string
}

export const AuthContext = createContext({} as AuthData)

export const TestProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [applicationType, setApplicationType] = useState<boolean>(false)

  const getUserProfileAsync = async () => {
    try {
      const response = await api('/user/me')
      if (response.status === 401) {
        setAuthenticated(false)
        return null
      }
      const data = response.data
      return data
    } catch (error) {
      console.log(error)
      return null
    }
  }

  useEffect(() => {
    const cookies = parseCookies()
    const accessToken = cookies['exobot.access_token']

    const handleAuthenticationChange = async () => {
      try {
        setLoading(true)

        if (accessToken) {
          const userData = await getUserProfileAsync()

          if (userData) {
            setAuthenticated(true)
            setUser(userData)
          } else {
            setAuthenticated(false)
          }
        } else {
          setAuthenticated(false)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    handleAuthenticationChange()
  }, [])

  const handleLogin = async (accessToken: string) => {
    try {
      setCookie(undefined, 'exobot.access_token', accessToken, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })

      setLoading(true)

      const userData = await getUserProfileAsync()
      if (userData) {
        setAuthenticated(true)
        setUser(userData)
      } else {
        setAuthenticated(false)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    try {
      destroyCookie(undefined, 'exobot.access_token')
      setUser(null)
      setAuthenticated(false)
    } catch (err) {
      console.log(err)
    }
  }

  const login = () => {
    if (authenticated) {
      logout()
    }
    const url =
      'https://discord.com/api/oauth2/authorize?' +
      new URLSearchParams({
        client_id: '1016481594573344859',
        redirect_uri: 'http://localhost:3000/api/auth/callback',
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
      if (!accessToken) return

      newWindow?.close() // Fechar a janela após receber o token

      handleLogin(accessToken) // Definir o estado como autenticado após receber o token
    }

    window.addEventListener('message', handleEvent)

    return () => {
      window.removeEventListener('message', handleEvent)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        authenticated,
        logout,
        loading,
        applicationType,
        setApplicationType,
      }}
    >
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  )
}
