import { RootState } from '@/store/store'
import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'

type ProtectedComponentProps = {
  children: ReactNode
}

const ProtectedComponent: React.FC<ProtectedComponentProps> = ({
  children,
}) => {
  const { authenticated } = useSelector((state: RootState) => state.user)

  return authenticated ? null : <>{children}</>
}

export default ProtectedComponent
