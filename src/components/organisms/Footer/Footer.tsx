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



const Footer = () => {
  return (
    <FooterStyles>
      <Container>
        <div className="footer-wrapper">
          <div className="footer-menus">
            <nav>
              <ul>
                <li>
                  
                </li>
              </ul>
            </nav>

            <div className="social-medias">
              <a>
                <FontAwesomeIcon className="icon" icon={faDiscord} />
              </a>
              <a>
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </FooterStyles>
  )
}

export default Footer