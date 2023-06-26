import Button from '@/components/atoms/Button'
import Text from '@/components/atoms/Text'
import Title from '@/components/atoms/Title'
import { avatarDropdownMenu } from '@/data/navContent'
import useAuth from '@/hooks/useAuth'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { AvatarDropdownWrapper } from './AvatarDropdown.styled'

const AvatarDropdown = () => {
  const { logout, user } = useAuth()

  return (
    <AvatarDropdownWrapper>
      <header className="user-info">
        {!user ? (
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
