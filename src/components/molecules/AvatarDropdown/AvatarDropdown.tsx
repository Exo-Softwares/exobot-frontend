import Button from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { Title } from '@/components/atoms/Title'
import { AuthContext } from '@/contexts/AuthContext'
import Link from 'next/link'
import { useContext } from 'react'
import { AvatarDropdownWrapper } from './AvatarDropdown.styled'
import { IoIosArrowForward } from 'react-icons/io'
import { avatarDropdownMenu } from '@/data/navContent'

const AvatarDropdown = () => {
  const { logout, user } = useContext(AuthContext)

  return (
    <AvatarDropdownWrapper>
      <header className="user-info">
        {!user ? (
          <Text>Faça log-in para continuar</Text>
        ) : (
          <>
            <div className="green" />
            <Title>
              {user?.username}
              <span>#{user?.discriminator}</span>
            </Title>
          </>
        )}
      </header>
      {!user ? (
        <Link href="http://localhost:3001/auth/discord/login">
          <Button>Entrar</Button>
        </Link>
      ) : (
        <nav>
          <ul>
            {avatarDropdownMenu.map((item, index) => (
              <Link key={index} href={item.href}>
                <li className="link">
                  {item.name} <IoIosArrowForward className="icon" />
                </li>
              </Link>
            ))}

            <li className="logout" onClick={logout}>
              Sair
            </li>
          </ul>
        </nav>
      )}
    </AvatarDropdownWrapper>
  )
}

export default AvatarDropdown
