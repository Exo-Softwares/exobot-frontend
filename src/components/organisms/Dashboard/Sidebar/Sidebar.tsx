import Logo from '@/components/atoms/Logo'
import { SidebarWrapper } from './Sidebar.styled'
import { Icon } from '@/components/atoms/Icon'
import { useEffect, useState } from 'react'

interface SidebarProps {
  getContent: (content: number) => void
}

const Sidebar = ({ getContent }: SidebarProps) => {
  const [content, setContent] = useState(0)

  useEffect(() => {
    getContent(content)
  }, [content])

  return (
    <SidebarWrapper>
      <header>
        <Logo />
      </header>
      <nav>
        <ul>
          <li
            className={content === 0 ? 'active' : undefined}
            onClick={() => setContent(0)}
          >
            <Icon nameIcon="MdDashboard" propsIcon={{ className: 'icon' }} />
            Dashboard
          </li>
          <li
            className={content === 1 ? 'active' : undefined}
            onClick={() => setContent(1)}
          >
            <Icon nameIcon="BsFillGearFill" propsIcon={{ className: 'icon' }} />
            Configurações gerais
          </li>
          <li
            className={content === 2 ? 'active' : undefined}
            onClick={() => setContent(2)}
          >
            <Icon nameIcon="FaWrench" propsIcon={{ className: 'icon' }} />
            Configurações avançadas
          </li>
        </ul>
      </nav>
    </SidebarWrapper>
  )
}

export default Sidebar
