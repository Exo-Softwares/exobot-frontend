/* eslint-disable no-unused-vars */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { Container } from '@/styles/globals'
import Logo from '@/components/atoms/Logo'
import { NavbarWrapper, StickyNavbar } from './Navbar.styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import Button from '@/components/atoms/Button'
import Avatar from '@/components/atoms/Avatar'
import AvatarDropdown from '@/components/molecules/AvatarDropdown/AvatarDropdown'
import { Icon } from '@/components/atoms/Icon'
import NotificationsDropdown from '@/components/molecules/NotificationsDropdown/NotificationsDropdown'
import Notifications from '@/components/atoms/Notifications'
import HambMenu from '@/components/atoms/HambMenu'

const Navbar = () => {
  const router = useRouter()
  const { authenticated } = useSelector((state: RootState) => state.user)
  const { notifications } = useSelector(
    (state: RootState) => state.notifications,
  )

  // Handle notifications dropdown (& close menu when clicking outside container)
  const [notificationsDropdownStatus, setNotificationsDropdownStatus] =
    useState(false)

  const notificationsMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationsMenuRef.current &&
        !notificationsMenuRef.current.contains(event.target as Node)
      ) {
        setNotificationsDropdownStatus(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Change background to blurred when scrolling
  const [navbar, setNavbar] = useState(false)
  const [loading, setLoading] = useState(false)

  // Hide navbar on scroll down
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) {
        // if scroll down hide the navbar
        setShow(false)
      } else {
        // if scroll up show the navbar
        setShow(true)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll', changeBackground)
    setLoading(true)
  }, [])

  return (
    <StickyNavbar
      className={`${navbar ? 'nav-background' : 'nav-transparent'} ${
        show && 'hidden'
      }`}
    >
      <NavbarWrapper>
        <Container className="container">
          <HambMenu />

          <Logo />

          {/* Navbar Links */}
          <ul className="links">
            {!authenticated && (
              <Link
                className={router.pathname === '/' ? 'active' : ''}
                href="/"
              >
                <li>Página inicial</li>
              </Link>
            )}

            {authenticated && (
              <Link
                className={router.pathname === '/applications' ? 'active' : ''}
                href="/applications"
              >
                <li>Minhas aplicações</li>
              </Link>
            )}

            <Link href="/">
              <li>Entrar em contato</li>
            </Link>
            <Link
              className={router.pathname === '/pricing' ? 'active' : ''}
              href="/pricing"
            >
              <li>Preços</li>
            </Link>
          </ul>

          {/* Navbar CTA */}
          <div className="account-wrapper">
            {!authenticated ? (
              <Link href="http://localhost:3001/auth/discord/login">
                <Button>Entrar</Button>
              </Link>
            ) : (
              <div className="stuff">
                <div className="notification-container">
                  <Notifications />
                </div>

                <div className="avatar-container">
                  <Avatar />
                </div>
              </div>
            )}
          </div>
          <div className="avatar-container mobile">
            <Avatar />
          </div>
        </Container>
      </NavbarWrapper>
    </StickyNavbar>
  )
}

export default Navbar
