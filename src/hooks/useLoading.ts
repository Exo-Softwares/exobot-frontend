import { useContext } from 'react'

import { LoadingContext } from '@/contexts/LoadingContext'

export default function useLoading() {
  const context = useContext(LoadingContext)

  return context
}
