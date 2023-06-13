import Title from '@/components/atoms/Title'
import { AvatarDropdownWrapper } from './AvatarDropdown.styled'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, RootState } from '@/store/store'
import { Icon } from '@/components/atoms/Icon'
import Link from 'next/link'
import Button from '@/components/atoms/Button'
import Text from '@/components/atoms/Text'

const AvatarDropdown = () => {
  const { user } = useSelector((state: RootState) => state.user)
  const { authenticated } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<Dispatch>()

  const logout = () => {
    dispatch.user.logoutAsync()
  }

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
