import api from '@/lib/axios'
import { BotProps } from '@/types/bot'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface ProductsData {
  bots: BotProps[]
}

interface ProductsProps {
  children: ReactNode
  setProviderLoaded: (load: boolean) => void
}

export const ProductsContext = createContext({} as ProductsData)

export const ProductsProvider = ({
  children,
  setProviderLoaded,
}: ProductsProps) => {
  const [bots, setBots] = useState<BotProps[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get('bot/findAll')

        setBots(data)
      } catch (err) {
        console.log(err)
        setBots([])
      } finally {
        setProviderLoaded(false)
      }
    }
    getProducts()
  }, [])

  return (
    <ProductsContext.Provider value={{ bots }}>
      {children}
    </ProductsContext.Provider>
  )
}
