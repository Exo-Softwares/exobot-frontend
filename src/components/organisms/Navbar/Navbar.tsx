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
import MobileMenu from '@/components/molecules/MobileMenu/MobileMenu'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useScrollLock } from '@/hooks/scrollLock'
import { animated, useTransition } from 'react-spring'
import { headerMenu } from '@/data/navContent'

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

  // Mobile menu
  const [mobileMenu, setMobileMenu] = useState(false)

  // Get mobile menu status from children component
  const handleCloseMobileMenu = () => {
    setMobileMenu(false)
  }

  // Prevent user from scrolling when mobile menu is open
  const { lockScroll, unlockScroll } = useScrollLock()

  useEffect(() => {
    mobileMenu === false && unlockScroll()
  }, [mobileMenu])

  // Mobile menu animation
  const transition = useTransition(mobileMenu, {
    from: { x: -800, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1, background: '#0a0a0a' },
    leave: { x: -800, y: 0, opacity: 0 },
  })

  return (
    <StickyNavbar
      className={`${navbar ? 'nav-background' : 'nav-transparent'} ${
        show && 'hidden'
      }`}
    >
      <NavbarWrapper>
        <Container className="container">
          <HambMenu
            onClick={(e) => {
              mobileMenu ? unlockScroll() : lockScroll()
              setMobileMenu(!mobileMenu)
            }}
          />

          <Logo />

          {/* Navbar Links */}
          <ul className="links">
            {headerMenu.map((item, index) => {
              if (authenticated) {
                if (item.showWhenAuthenticated) {
                  return (
                    <li key={index}>
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  )
                }
              } else {
                if (item.showWhenNotAuthenticated) {
                  return (
                    <li key={index}>
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  )
                }
              }
              return null
            })}
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

      {transition(
        (style, item) =>
          item && (
            <animated.div className="animated" style={style}>
              <MobileMenu setMobileMenu={handleCloseMobileMenu} />
            </animated.div>
          ),
      )}
    </StickyNavbar>
  )
}

export default Navbar
