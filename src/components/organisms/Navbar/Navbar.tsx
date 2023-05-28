/* eslint-disable no-unused-vars */
import Button from '@/components/atoms/Button'
import Logo from '@/components/atoms/Logo'
import { RootState } from '@/store/store'
import { Container } from '@/styles/globals'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { NavbarWrapper, StickyNavbar } from './Navbar.styled'
import { useSelector } from 'react-redux'

interface NavBarProps {}

const Navbar: React.FC<NavBarProps> = () => {
  const router = useRouter()

  const { notifications } = useSelector(
    (state: RootState) => state.notifications,
  )

  console.log(notifications[0].id)

  const [navbar, setNavbar] = useState(false)
  const [loading, setLoading] = useState(false)
  const [menu, setMenu] = useState(false)

  /* Change background to blurred when scrolling */
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
            <Link className={router.pathname === '/' ? 'active' : ''} href="/">
              <li>Página inicial</li>
            </Link>
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
          <div className="button-wrapper">
            <Link href="http://localhost:3001/auth/discord/login">
              <Button>Entrar</Button>
            </Link>
          </div>
        </Container>
      </NavbarWrapper>
    </StickyNavbar>
  )
}

export default Navbar
