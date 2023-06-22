import React from 'react'
import { headerMenu } from '@/data/navContent'
import { MobileMenuWrapper } from './MobileMenu.styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { useRouter } from 'next/router'
import Button from '@/components/atoms/Button'

interface MobileMenuProps {
  setMobileMenu: () => void
}

const MobileMenu = ({ setMobileMenu }: MobileMenuProps) => {
  // Get if user is authenticated
  const { authenticated } = useSelector((state: RootState) => state.user)

  // Get router to change link color
  const router = useRouter()

  return (
    <MobileMenuWrapper id="mobile-menu">
      <nav>
        <ul>
          {headerMenu.map((item, index) => {
            if (authenticated) {
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
      {!authenticated && (
        <Link href="" className="button">
          <Button>Entrar</Button>
        </Link>
      )}
    </MobileMenuWrapper>
  )
}

export default MobileMenu
