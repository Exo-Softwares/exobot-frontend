import Button from '@/components/atoms/Button'
import { mainMenu } from '@/data/navContent'
import useAuth from '@/hooks/useAuth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoIosArrowForward } from 'react-icons/io'
import { MobileMenuWrapper } from './MobileMenu.styled'

interface MobileMenuProps {
  setMobileMenu: () => void
}

const MobileMenu = ({ setMobileMenu }: MobileMenuProps) => {
  // Get if user is authenticated
  const { user } = useAuth()

  // Get router to change link color
  const router = useRouter()

  return (
    <MobileMenuWrapper id="mobile-menu">
      <nav>
        <ul>
          {mainMenu.map((item, index) => {
            if (user) {
              if (item.showWhenAuthenticated) {
                return (
                  <Link
                    className={router.pathname === item.href ? 'active' : ''}
                    onClick={(e) => setMobileMenu()}
                    key={index}
                    href={item.href}
                  >
                    <li>
                      {item.name} <IoIosArrowForward className="icon" />
                    </li>
                  </Link>
                )
              }
            } else {
              if (item.showWhenNotAuthenticated) {
                return (
                  <Link
                    className={router.pathname === item.href ? 'active' : ''}
                    onClick={(e) => setMobileMenu()}
                    key={index}
                    href={item.href}
                  >
                    <li>
                      {item.name} <IoIosArrowForward className="icon" />
                    </li>
                  </Link>
                )
              }
            }
            return null
          })}
        </ul>
      </nav>
      {!user && (
        <Link href="" className="button">
          <Button>Entrar</Button>
        </Link>
      )}
    </MobileMenuWrapper>
  )
}

export default MobileMenu
