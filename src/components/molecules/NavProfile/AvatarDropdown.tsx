import Title from '@/components/atoms/Title'
import { AvatarDropdownWrapper } from './AvatarDropdown.styled'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, RootState } from '@/store/store'
import { Icon } from '@/components/atoms/Icon'

const AvatarDropdown = () => {
  const { user } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<Dispatch>()

  const logout = () => {
    dispatch.user.logoutAsync()
  }

  return (
    <AvatarDropdownWrapper>
      <div className="user-info">
        <div className="green" />
        <Title weight="regular" fontSize="18px" center>
          {user?.username}
          <span>#{user?.discriminator}</span>
        </Title>
      </div>
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
    </AvatarDropdownWrapper>
  )
}

export default AvatarDropdown
