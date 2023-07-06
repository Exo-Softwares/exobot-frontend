import { useContext } from 'react'

import { DashBoardContext } from '@/contexts/DashboardContext'

export default function useDashboard() {
  const context = useContext(DashBoardContext)

  return context
}
