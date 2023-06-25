import Loading from '@/components/organisms/Loading/Loading'
import React, { ReactNode, createContext, useState } from 'react'

type LoadingType = boolean

interface LoadingData {
  loading: LoadingType
  message: string
  setLoading: (status: boolean, message?: string) => void
}

interface LoadingProps {
  children: ReactNode
}

export const LoadingContext = createContext({} as LoadingData)

export const LoadingProvider = ({ children }: LoadingProps) => {
  const [loading, setLoadingStatus] = useState<LoadingType>(false)
  const [message, setMessage] = useState('')

  const setLoading = (status: boolean, message?: string) => {
    setLoadingStatus(status)
    if (message) setMessage(message)

    if (!status) setMessage('')
  }

  return (
    <LoadingContext.Provider value={{ loading, message, setLoading }}>
      {!loading ? children : <Loading />}
    </LoadingContext.Provider>
  )
}
