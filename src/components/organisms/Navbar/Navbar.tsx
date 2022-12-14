/* Navbar Component */

/* Styles Imports */
import { Container } from "../../../styles/globals"
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
              <button>Entrar</button>
            </a>
          </div>
        </NavbarStyles>
      </Container>
    </StickyNavbar>
  )
}

export default Navbar