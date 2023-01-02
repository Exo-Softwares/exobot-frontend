/* Footer Component */

/* General Imports */
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router'

/* Styles Imports */
import './Footer.styled';
import { FooterStyles } from './Footer.styled';
import { Container } from '../../../styles/globals';

/* Font Awesome Imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons"

/* Assets Imports */
import DiscordityLogo from '../../../assets/rx6development.png';
import { TitleLight } from '../../atoms/Titles';




const Footer = () => {
  const router = useRouter();

  return (
    <FooterStyles>
      <Container>
        <div className="footer-wrapper">
          <div className="footer-menus">
            <nav>
              <TitleLight fontSize='22px' color='white'>Acesso rápido</TitleLight>
              <ul>
                <Link className={router.pathname === '/' ? 'active' : ''} href="/">
                  Página inicial
                </Link>
                <Link className={router.pathname === '/' ? '' : ''} href="/">
                  Preços
                </Link>
                <Link className={router.pathname === '/' ? '' : ''} href="/">
                  Entrar em contato
                </Link>

              </ul>
            </nav>
            <nav>
              <TitleLight className="debug" fontSize='22px' color='white'>Minha conta</TitleLight>
              <ul>
                <li>
                  Entrar
                </li>
                <li>
                  Dashboard
                </li>
              </ul>
            </nav>
            <nav>
              <TitleLight className="debug" fontSize='22px' color='white'>Redes sociais</TitleLight>
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
    </FooterStyles>
  )
}

export default Footer