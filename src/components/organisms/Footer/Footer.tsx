/* Footer Component */

/* General Imports */
import Image from 'next/image'

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
  return (
    <FooterStyles>
      <Container>
        <div className="footer-wrapper">
          <div className="footer-menus">
            <nav>
              <TitleLight fontSize='22px' color='white'>Acesso rápido</TitleLight>
              <ul>
                <li>
                  Página inicial
                </li>
                <li>
                  Preços
                </li>
                <li>
                  Entrar em contato
                </li>
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