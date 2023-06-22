import React, { ReactNode, createContext, useState } from 'react'

type Loading = boolean

interface LoadingData {
  loading: Loading
  message: string
  setLoading: (status: boolean, message?: string) => void
}

interface StepContextProps {
  children: ReactNode
}

export const LoadingContext = createContext({} as LoadingData)

export const LoadingProvider = ({ children }: StepContextProps) => {
  const [loading, setLoadingStatus] = useState<Loading>(false)
  const [message, setMessage] = useState('')

  const setLoading = (status: boolean, message?: string) => {
    setLoadingStatus(status)
    if (message) setMessage(message)
    if (!status) setMessage('')
  }

  return (
    <LoadingContext.Provider value={{ loading, message, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}
