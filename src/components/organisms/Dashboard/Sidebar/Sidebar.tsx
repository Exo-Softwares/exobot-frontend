import Logo from '@/components/atoms/Logo'
import { SidebarWrapper } from './Sidebar.styled'
import { MdDashboard } from 'react-icons/md'
import { FaWrench, FaThList } from 'react-icons/fa'
import { BsFillGearFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'

interface SidebarProps {
  getContent: (content: number) => void
}

const Sidebar = ({ getContent }: SidebarProps) => {
  const [content, setContent] = useState(1)

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
            className={content === 1 ? 'active' : undefined}
            onClick={() => setContent(1)}
          >
            <MdDashboard className="icon" />
            Dashboard
          </li>
          <li
            className={content === 2 ? 'active' : undefined}
            onClick={() => setContent(2)}
          >
            <BsFillGearFill className="icon" />
            Configurações gerais
          </li>
          <li
            className={content === 3 ? 'active' : undefined}
            onClick={() => setContent(3)}
          >
            <FaWrench className="icon" />
            Configurações avançadas
          </li>
          <li
            className={content === 4 ? 'active' : undefined}
            onClick={() => setContent(4)}
          >
            <FaThList className="icon" />
            Logs
          </li>
        </ul>
      </nav>
    </SidebarWrapper>
  )
}

export default Sidebar
