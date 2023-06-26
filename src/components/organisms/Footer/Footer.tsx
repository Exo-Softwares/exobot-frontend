import Link from 'next/link'
import { useRouter } from 'next/router'
import { FooterWrapper } from './Footer.styled'

import Title from '@/components/atoms/Title'
import { mainMenu } from '@/data/navContent'
import useAuth from '@/hooks/useAuth'
import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '../../../styles/globals'

const Footer = () => {
  const router = useRouter()

  const { user } = useAuth()

  return (
    <FooterWrapper className="footer">
      <Container className="container">
        <div className="footer-wrapper">
          <div className="footer-menus">
            <nav>
              <Title weight="light">Acesso rápido</Title>
              <ul>
                {mainMenu.map((item, index) => {
                  if (user) {
                    if (item.showWhenAuthenticated) {
                      return (
                        <Link href={item.href} key={index}>
                          <li
                            className={
                              router.pathname === item.href ? 'active' : ''
                            }
                          >
                            {item.name}
                          </li>
                        </Link>
                      )
                    }
                  } else {
                    if (item.showWhenNotAuthenticated) {
                      return (
                        <Link href={item.href} key={index}>
                          <li
                            className={
                              router.pathname === item.href ? 'active' : ''
                            }
                          >
                            {item.name}
                          </li>
                        </Link>
                      )
                    }
                  }
                  return null
                })}
              </ul>
            </nav>
            <nav>
              <Title weight="light">Minha conta</Title>
              <ul>
                <Link
                  className={router.pathname === '/' ? 'active' : ''}
                  href="/"
                >
                  Fazer login
                </Link>
                <Link className={router.pathname === '/' ? '' : ''} href="/">
                  Dashboard
                </Link>
              </ul>
            </nav>
            <nav>
              <Title weight="light">Redes sociais</Title>
              <div className="social-medias">
                <a>
                  <FontAwesomeIcon className="icon" icon={faDiscord} />
                </a>
                <a>
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
