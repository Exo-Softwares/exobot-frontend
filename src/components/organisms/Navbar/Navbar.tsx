/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* Navbar Component */

/* General Imports */
import Image from 'next/image'
import { useRouter } from 'next/router'

/* Styles Imports */
import { Container } from "../../../styles/globals"
import { ButtonCTA } from "../../atoms/Buttons";
import { NavbarStyles, StickyNavbar } from './Navbar.styled';



/* Assets Imports */
import DiscordityLogo from '../../../assets/discordityLogo.png';
import { useEffect, useState } from "react";
import theme from "../../../styles/theme";
import path from 'path';
import Link from 'next/link';

interface Size {
  size: string;
}

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

  const router = useRouter();

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
            <Link className={router.pathname === '/' ? 'active' : ''} href="/">
              <li>Página inicial</li>
            </Link>
            <Link href="/">
              <li>Entrar em contato</li>
            </Link>
            <Link href="/">
              <li>Preços</li>
            </Link>
          </ul>

          {/* Navbar CTA */}
          <div className="button-wrapper">
            <a>
              <ButtonCTA width={'140px'}>
                Entrar
              </ButtonCTA>
            </a>
          </div>
        </NavbarStyles>
      </Container>
    </StickyNavbar>
  )
}

export default Navbar