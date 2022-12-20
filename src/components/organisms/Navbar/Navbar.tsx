/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* Navbar Component */

/* Styles Imports */
import { Container } from "../../../styles/globals"
import { ButtonDefault } from "../../atoms/Buttons.styled";
import { NavbarStyles, StickyNavbar } from './Navbar.styled';

import Image from 'next/image'

/* Assets Imports */
import DiscordityLogo from '../../../assets/discordityLogo.png';
import { useEffect, useState } from "react";
import theme from "../../../styles/theme";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [loading, setLoading] = useState(false);

  /* Change background to blurred when scrolling */
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
    setLoading(true);
  }, []);


  return (
    <StickyNavbar className={navbar ? 'nav-background' : 'nav-transparent'}>
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