import Loading from '@/components/organisms/Loading/Loading'
import { useScrollLock } from '@/hooks/useScrollLock'
import React, { ReactNode, createContext, useEffect, useState } from 'react'

type LoadingType = boolean

interface LoadingData {
  loading: LoadingType
  message: string
  setLoading: (status: boolean, message?: string) => void
}

interface LoadingProps {
  children: ReactNode
  providerAuthLoaded: boolean
  providerProductsLoaded: boolean
}

export const LoadingContext = createContext({} as LoadingData)

export const LoadingProvider = ({
  children,
  providerAuthLoaded,
  providerProductsLoaded,
}: LoadingProps) => {
  const [loading, setLoadingStatus] = useState<LoadingType>(false)
  const [message, setMessage] = useState('')
  const { lockScroll, unlockScroll } = useScrollLock()

  const setLoading = (status: boolean, message?: string) => {
    setLoadingStatus(status)
    if (message) setMessage(message)

    if (!status) setMessage('')
  }

  useEffect(() => {
    console.log(loading || providerAuthLoaded || providerProductsLoaded)

    if (providerAuthLoaded || providerProductsLoaded) {
      setLoadingStatus(true)
    } else {
      setLoadingStatus(false)
    }

    if (loading) {
      if (typeof window !== 'undefined') {
        lockScroll()
      }
    } else {
      unlockScroll()
    }
  }, [loading, providerAuthLoaded, providerProductsLoaded])

  return (
    <LoadingContext.Provider value={{ loading, message, setLoading }}>
      {loading && <Loading />}
      {children}
    </LoadingContext.Provider>
  )
}
