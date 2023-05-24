import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "@/styles/globals";
import { ButtonPurple } from "@/components/atoms/Buttons";
import Logo from "@/components/atoms/Logo";
import { NavbarWrapper, StickyNavbar } from "./Navbar.styled";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { Dispatch, RootState } from "../../../store/store";
import { useDispatch } from "react-redux";
=======
import { RootState } from "@/store/store";
>>>>>>> 460723c6190f80eda24efe588d319bcdb8dd6577

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch<Dispatch>()
  const userState = useSelector((state: RootState) => state.user);
  const { authenticated } = userState;

  const [navbar, setNavbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState(false);

  const logout = async () => {
    try {
        router.push('/')
        dispatch.user.logoutAsync()
    } catch (err) {
        console.log(err)
    }     
}

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
          <Logo />

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
<<<<<<< HEAD
            { authenticated ? <ButtonCTA width={"140px"} onClick={logout}>Deslogar</ButtonCTA>
            : <a href="http://localhost:3001/auth/discord/login">
              <ButtonCTA width={"140px"}>Entrar</ButtonCTA>
            </a>}
=======
            <a href="https://3fd6-179-42-133-46.ngrok-free.app/auth/discord/login">
              <ButtonPurple width={"140px"}>Entrar</ButtonPurple>
            </a>
>>>>>>> 460723c6190f80eda24efe588d319bcdb8dd6577
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
    </StickyNavbar>
  );
};

export default Navbar;
