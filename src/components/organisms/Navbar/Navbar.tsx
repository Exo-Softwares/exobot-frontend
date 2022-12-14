/* Navbar Component */

/* Styles Imports */
import { Container } from "../../../styles/globals"
import { ButtonDefault } from "../../atoms/Button.styled";
import { NavbarStyles, StickyNavbar } from './Navbar.styled';

const Navbar = () => {
  return (
    <StickyNavbar>
      <Container>
        <NavbarStyles>
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