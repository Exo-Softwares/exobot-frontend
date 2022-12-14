/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* Navbar Component */

/* Styles Imports */
import { Container } from "../../../styles/globals"
import { ButtonDefault } from "../../atoms/Button.styled";
import { NavbarStyles, StickyNavbar } from './Navbar.styled';

import Image from 'next/image'

/* Assets Imports */
import DiscordityLogo from '../../../assets/discordityLogo.png';

const Navbar = () => {
  return (
    <StickyNavbar>
      <Container>
        <NavbarStyles>
          {/* Discordity Logo */}
          <Image
            src={DiscordityLogo}
            alt="Discordity"
            width={180}
          />

          {/* Navbar Links */}
          <ul>
            <li>Como funciona</li>
            <li>Preços</li>
          </ul>

          {/* Navbar CTA */}
          <div className="button-wrapper">
            <a>
              <ButtonDefault>
                Entrar
              </ButtonDefault>
            </a>
          </div>
        </NavbarStyles>
      </Container>
    </StickyNavbar>
  )
}

export default Navbar