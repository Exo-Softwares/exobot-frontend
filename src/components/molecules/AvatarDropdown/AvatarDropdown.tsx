import Button from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import Text from '@/components/atoms/Text'
import Title from '@/components/atoms/Title'
import { AuthContext } from '@/contexts/AuthContext'
import Link from 'next/link'
import { useContext } from 'react'
import { AvatarDropdownWrapper } from './AvatarDropdown.styled'

const AvatarDropdown = () => {
  const { authenticated, logout, user } = useContext(AuthContext)

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
            <li>
              <Icon propsIcon={{ className: 'icon' }} nameIcon="TbPigMoney" />
              Faturas
            </li>

            <li className="logout" onClick={logout}>
              <Icon propsIcon={{ className: 'icon' }} nameIcon="IoMdExit" />
              Deslogar
            </li>
          </ul>
        </nav>
      )}
    </AvatarDropdownWrapper>
  )
}

export default AvatarDropdown
