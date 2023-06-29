import { NotificationType } from '@/types/notification'
import React, { ReactNode, createContext, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface NotificationContextData {
  addNotification: ({ message, type }: NotificationType) => void
}

export const NotificationContext = createContext<NotificationContextData>(
  {} as NotificationContextData,
)

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const addNotification = ({ message, type }: NotificationType) => {
    type === 'success' &&
      toast.success(`${message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
  }

  const contextValue: NotificationContextData = {
    addNotification,
  }

  return (
    <NotificationContext.Provider value={contextValue}>
      <ToastContainer />
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)
