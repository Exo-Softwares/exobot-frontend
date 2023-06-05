import React, { createContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Dispatch } from './store'

const DispatchContext = createContext<any>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<Dispatch>()
  useEffect(() => {
    async function loadUser() {
      try {
        await dispatch.user.getUserProfileAsync()
        await dispatch.guilds.setGuilds()
        await dispatch.notifications.getNotifications()
        await dispatch.bots.getBotsAsync()
      } catch (err) {
        console.error(err)
      }
    }
    loadUser()
  }, [])

  return (
    <DispatchContext.Provider value={dispatch}>
      {children}
    </DispatchContext.Provider>
  )
}
