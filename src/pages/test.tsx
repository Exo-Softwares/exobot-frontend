import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

const Pricing = () => {
  const { login } = useContext(AuthContext)

  return (
    <main>
      <button onClick={login}>Login</button>
    </main>
  )
}

export default Pricing
