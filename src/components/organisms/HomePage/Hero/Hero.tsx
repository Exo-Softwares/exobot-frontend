/* Hero Section (Mainly used at Home) */

/* Style Import */
import { HeroStyles } from "./Hero.styled";

/* Atoms Import */
import { HeadTitle, SubTitleLight } from "../../../atoms/Titles";
import { ButtonCTA } from "../../../atoms/Buttons";

const Hero = () => {
  return (
    <HeroStyles>
      <section>
        <div className="hero-wrapper">
          <div className="hero-content">
            <HeadTitle>Um novo modo de construir uma <span>comunidade profissional</span> no Discord</HeadTitle>
            <SubTitleLight>Impulsione os números do seu servidor em até <span>60%</span></SubTitleLight>
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
