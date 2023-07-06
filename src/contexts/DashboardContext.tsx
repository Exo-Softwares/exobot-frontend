import { Application } from '@/types/application'
import { DiscordGuild } from '@/types/guild'
import { parseCookies } from 'nookies'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

interface DashBoardData {
  errors: string[]
  warnings: string[]
  activeApplication?: Application
  guild?: DiscordGuild
  config?: any
}

interface DashBoardProps {
  children: ReactNode
}

export const DashBoardContext = createContext({} as DashBoardData)

export const DashBoardProvider = ({ children }: DashBoardProps) => {
  const [errors, setErrors] = useState<string[]>([])
  const [warnings, setWarnings] = useState<string[]>([])

  const [socket, setSocket] = useState<Socket>()

  useEffect(() => {
    const cookies = parseCookies()
    const accessToken = cookies['exobot.access_token']

    const newSocket = io('http://localhost:3000', {
      auth: {
        token: accessToken,
      },
    })

    setSocket(newSocket)

    return () => {
      newSocket.disconnect()
    }
  }, [])

  return (
    <DashBoardContext.Provider value={{ errors, warnings }}>
      {children}
    </DashBoardContext.Provider>
  )
}
