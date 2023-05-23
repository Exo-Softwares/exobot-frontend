import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { Container } from "../../../styles/globals";
import { ButtonCTA } from "../../atoms/Buttons";
import { NavbarWrapper, StickyNavbar } from "./Navbar.styled";
import brandLogo from "../../../assets/brand/brandLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu/Menu";

const Navbar = () => {
  const router = useRouter();

  const [navbar, setNavbar] = useState(false);
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
    window.addEventListener("scroll", changeBackground);
    setLoading(true);
  }, []);

  return (
    <StickyNavbar className={navbar ? "nav-background" : "nav-transparent"}>
      <NavbarWrapper>
        <Container className="container">
          {/* Discordity Logo */}
          <Image
            className="brand"
            src={brandLogo}
            alt="Discordity"
            width={180}
          />

          {/* Navbar Links */}
          <ul>
            <Link className={router.pathname === "/" ? "active" : ""} href="/">
              <li>Página inicial</li>
            </Link>
            <Link href="/">
              <li>Entrar em contato</li>
            </Link>
            <Link
              className={router.pathname === "/pricing" ? "active" : ""}
              href="/pricing"
            >
              <li>Preços</li>
            </Link>
          </ul>

          {/* Navbar CTA */}
          <div className="button-wrapper">
            <ButtonCTA width={"140px"} onClick={() => signIn("discord")}>
              Entrar
            </ButtonCTA>
            <div
              onClick={() => {
                setMenu(!menu);
              }}
              className="menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </Container>
      </NavbarWrapper>
      {menu == true && <Menu />}
    </StickyNavbar>
  );
};

export default Navbar;
