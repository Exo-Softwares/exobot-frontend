/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* Navbar Component */

/* General Imports */
import Image from 'next/image'
import Link from 'next/link';
import path from 'path';
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import { signIn, useSession, signOut } from 'next-auth/react';

/* Styles Imports */
import { Container } from "../../../styles/globals"
import { ButtonCTA } from "../../atoms/Buttons";
import { NavbarStyles, StickyNavbar } from './Navbar.styled';

/* Assets Imports */
import DiscordityLogo from '../../../assets/discordityLogo.png';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { data: session } = useSession();
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
  if(session) {
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
            <nav>
              <ul>
                <Link className={router.pathname === '/' ? 'active' : ''} href="/">
                  Página inicial
                </Link>
                <Link className={router.pathname === '/_error' ? 'active' : ''} href="/">
                  Entrar em contato
                </Link>
                <Link className={router.pathname === '/pricing' ? 'active' : ''} href="/pricing">
                  Preços
                </Link>
              </ul>
            </nav>
  
            {/* Navbar CTA */}
            <div className="button-wrapper">
              <a>
                <ButtonCTA width={'140px'} onClick={() => signOut()}>
                  Dashboard
                </ButtonCTA>
              </a>
            </div>
          </NavbarStyles>
        </Container>
      </StickyNavbar>
    )
  }
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
          <nav>
            <ul>
              <Link className={router.pathname === '/' ? 'active' : ''} href="/">
                Página inicial
              </Link>
              <Link className={router.pathname === '/_error' ? 'active' : ''} href="/">
                Entrar em contato
              </Link>
              <Link className={router.pathname === '/pricing' ? 'active' : ''} href="/pricing">
                Preços
              </Link>
            </ul>
          </nav>

          {/* Navbar CTA */}
          <div className="button-wrapper">
            <a>
              <ButtonCTA width={'140px'} onClick={() => signIn('discord')}>
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