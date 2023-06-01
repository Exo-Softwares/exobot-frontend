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
          <li onClick={() => setContent(1)}>
            <Icon nameIcon="BsFillGearFill" propsIcon={{ className: 'icon' }} />
            Configurações gerais
          </li>
          <li onClick={() => setContent(1)}>
            <Icon nameIcon="BsFillGearFill" propsIcon={{ className: 'icon' }} />
            Configurações gerais
          </li>
        </ul>
      </nav>
    </SidebarWrapper>
  )
}

export default Sidebar
