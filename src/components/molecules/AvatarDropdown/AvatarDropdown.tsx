import Button from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { Title } from '@/components/atoms/Title'
import { avatarDropdownMenu } from '@/data/navContent'
import useAuth from '@/hooks/useAuth'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { AvatarDropdownWrapper } from './AvatarDropdown.styled'

const AvatarDropdown = () => {
  const { login, logout, user } = useAuth()

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
        <Button onClick={login}>Entrar</Button>
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
