import Button from '@/components/atoms/Button'
import Logo from '@/components/atoms/Logo'
import { RootState } from '@/store/store'
import { Container } from '@/styles/globals'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavbarWrapper, StickyNavbar } from './Navbar.styled'

const Navbar = () => {
  const router = useRouter()
  const { authenticated } = useSelector((state: RootState) => state.user)

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
