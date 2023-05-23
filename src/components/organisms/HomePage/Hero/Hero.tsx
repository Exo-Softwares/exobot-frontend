/* Hero Section (Mainly used at Home) */

/* Style Import */
import { HeroWrapper } from "./Hero.styled";

/* Atoms Import */
import { TitleBold, TitleLight } from "../../../atoms/Titles";
import { ButtonCTA } from "../../../atoms/Buttons";

const Hero = () => {
  return (
    <HeroWrapper>
      <section>
        <div className="hero-wrapper">
          <div className="hero-content">
            <TitleBold center>
              Um novo modo de construir uma <span>comunidade profissional</span>
            </TitleBold>
            <TitleLight center fontSize="27px" margin="20px 0px 20px 0px">
              Impulsione os seus números em até <span>60%</span>
            </TitleLight>
            <a>
              <ButtonCTA width="180px">Começar agora</ButtonCTA>
            </a>
          </div>
        </div>
      </section>
    </HeroWrapper>
  );
};

export default Hero;
