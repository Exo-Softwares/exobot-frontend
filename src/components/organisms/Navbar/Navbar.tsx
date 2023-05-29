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
import AvatarDropdown from '@/components/molecules/NavProfile/AvatarDropdown'

const Navbar = () => {
  const router = useRouter()
  const { authenticated } = useSelector((state: RootState) => state.user)

  // Handle avatar dropdown (& close menu when clicking outside container)
  const [avatarDropdownStatus, setAvatarDropdownStatus] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setAvatarDropdownStatus(false)
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
    <StickyNavbar className={navbar ? 'nav-background' : 'nav-transparent'}>
      <NavbarWrapper>
        <Container className="container">
          <Logo />

          {/* Navbar Links */}
          <ul>
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
          <div className="auth-wrapper">
            {!authenticated ? (
              <Link href="http://localhost:3001/auth/discord/login">
                <Button>Entrar</Button>
              </Link>
            ) : (
              <div className="avatar-container" ref={menuRef}>
                <Avatar
                  onClick={() => {
                    setAvatarDropdownStatus(!avatarDropdownStatus)
                  }}
                />
                {avatarDropdownStatus && <AvatarDropdown />}
              </div>
            )}
          </div>
        </Container>
      </NavbarWrapper>
    </StickyNavbar>
  )
}

export default Navbar
