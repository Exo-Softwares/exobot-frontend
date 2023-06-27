import api from '@/lib/axios'
import { BotProps } from '@/types/bot'
import { Module } from '@/types/modules'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface ProductsData {
  bots: BotProps[]
  modules: Module[]
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
  const [modules, setModules] = useState<Module[]>([])

  useEffect(() => {
    const getBots = async () => {
      const { data } = await api.get('bot/findAll')

      setBots(data)
    }

    const getModules = async () => {
      const { data } = await api.get('module/findAll')

      setModules(data)
    }
    const getProducts = async () => {
      try {
        await getBots()
        await getModules()
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
    <ProductsContext.Provider value={{ bots, modules }}>
      {children}
    </ProductsContext.Provider>
  )
}
