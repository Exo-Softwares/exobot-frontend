import Button from '@/components/atoms/Button'

import Text from '@/components/atoms/Text'
import Title from '@/components/atoms/Title'
import { authContext } from '@/contexts/AuthContext'
import Link from 'next/link'
import { useContext } from 'react'
import { AvatarDropdownWrapper } from './AvatarDropdown.styled'
import { IoIosArrowForward } from 'react-icons/io'

const AvatarDropdown = () => {
  const { authenticated, logout, user } = useContext(authContext)

  return (
    <AvatarDropdownWrapper>
      <header className="user-info">
        {!authenticated ? (
          <Text fontSize="18px" center>
            Faça log-in para continuar
          </Text>
        ) : (
          <>
            <div className="green" />
            <Title weight="regular" fontSize="18px" center>
              {user?.username}
              <span>#{user?.discriminator}</span>
            </Title>
          </>
        )}
      </header>
      {!authenticated ? (
        <Link href="http://localhost:3001/auth/discord/login">
          <Button>Entrar</Button>
        </Link>
      ) : (
        <nav>
          <ul>
            <li className="link">
              Faturas <IoIosArrowForward className="icon" />
            </li>
            <li className="link">
              Link <IoIosArrowForward className="icon" />
            </li>
            <li className="link">
              Link <IoIosArrowForward className="icon" />
            </li>

            <li className="logout" onClick={logout}>
              Deslogar
              <IoIosArrowForward className="icon" />
            </li>
          </ul>
        </nav>
      )}
    </AvatarDropdownWrapper>
  )
}

export default AvatarDropdown
