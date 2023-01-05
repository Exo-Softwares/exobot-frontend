/* Navbar Component */

/* General Imports */
import Image from 'next/image'
import Link from 'next/link';
import Router from 'next/router'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import { signIn, useSession, signOut } from 'next-auth/react';


/* Styles Imports */
import { Container } from "../../../styles/globals"
import { ButtonCTA } from "../../atoms/Buttons";
import { NavbarStyles, StickyNavbar } from './Navbar.styled';



/* Assets Imports */
import DiscordityLogo from '../../../assets/discordityLogo.png';

/* Font Awesome Imports */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu/Menu';


interface Size {
  size: string;
}

const Navbar = () => {
  const router = useRouter();

  const [navbar, setNavbar] = useState(false);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState(false);

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

  const menuHandler = () => {
    menu ? setMenu(false) : setMenu(true)

    console.log(menu)
  }

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
                <ButtonCTA width={'150px'} onClick={() => Router.push('/applications')}>
                  Suas aplicações
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
            className="brand"
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
            <Link className={router.pathname === '/pricing' ? 'active' : ''} href="/pricing">
              <li>Preços</li>
            </Link>
          </ul>

          {/* Navbar CTA */}
          <div className="button-wrapper">
              <ButtonCTA width={'140px'} onClick={() => signIn('discord')}>
                Entrar
              </ButtonCTA>
            <div onClick={menuHandler} className="menu">
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </NavbarStyles>
      </Container>
      {
        menu == true && <Menu />
      }
    </StickyNavbar>
  )
}

export default Navbar