/* Hero Section (Mainly used at Home) */

/* Style Import */
import { HeroStyles } from "./Hero.styled";

/* Atoms Import */
import { TitleBold, TitleLight } from "../../../atoms/Titles";
import { ButtonCTA } from "../../../atoms/Buttons";

const Hero = () => {
  return (
    <HeroStyles>
      <section>
        <div className="hero-wrapper">
          <div className="hero-content">
            <TitleBold>Um novo modo de construir uma <span>comunidade profissional</span> no Discord</TitleBold>
            <TitleLight fontSize="27px" marginTop="20px" marginBottom="30px">Impulsione os números do seu servidor em até <span>60%</span></TitleLight>
            <a>
              <ButtonCTA width="180px">Começar agora</ButtonCTA>
            </a>
          </div>
        </div>
      </section>
    </HeroStyles>
  );
};

export default Hero;
