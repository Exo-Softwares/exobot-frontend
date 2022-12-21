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
          <div className="footer-brand">
            <p>Criado com amor por</p>
            <Image
                src={DiscordityLogo}
                alt="Discordity"
                width={220}
            />
            <div className="social-medias">
              <a>
                <FontAwesomeIcon className="fa-lg" icon={faDiscord} />
              </a>
              <a>
                <FontAwesomeIcon className="fa-lg" icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </FooterStyles>
  )
}

export default Footer