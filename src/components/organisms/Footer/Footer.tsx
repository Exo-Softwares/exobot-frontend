/* Footer Component */

/* General Imports */
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

/* Styles Imports */
import "./Footer.styled";
import { FooterWrapper } from "./Footer.styled";
import { Container } from "../../../styles/globals";

/* Font Awesome Imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";

/* Assets Imports */
import DiscordityLogo from "../../../assets/rx6development.png";
import { TitleLight } from "../../atoms/Titles";

const Footer = () => {
  const router = useRouter();

  return (
    <FooterWrapper>
      <Container>
        <div className="footer-wrapper">
          <div className="footer-menus">
            <nav>
              <TitleLight fontSize="22px" color="white">
                Acesso rápido
              </TitleLight>
              <ul>
                <Link
                  className={router.pathname === "/" ? "active" : ""}
                  href="/"
                >
                  <li>Página inicial</li>
                </Link>
                <Link className={router.pathname === "/" ? "" : ""} href="/">
                  <li>Preços</li>
                </Link>
                <Link className={router.pathname === "/" ? "" : ""} href="/">
                  <li>Entrar em contato</li>
                </Link>
              </ul>
            </nav>
            <nav>
              <TitleLight className="debug" fontSize="22px" color="white">
                Minha conta
              </TitleLight>
              <ul>
                <Link
                  className={router.pathname === "/" ? "active" : ""}
                  href="/"
                >
                  Fazer login
                </Link>
                <Link className={router.pathname === "/" ? "" : ""} href="/">
                  Dashboard
                </Link>
              </ul>
            </nav>
            <nav>
              <TitleLight className="debug" fontSize="22px" color="white">
                Redes sociais
              </TitleLight>
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
    </FooterWrapper>
  );
};

export default Footer;
