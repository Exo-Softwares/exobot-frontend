/* Hero Section (Mainly used at Home) */

/* Style Import */
import { HeroStyles } from "./Hero.styled";

/* Atoms Import */
import { HeadTitle, SubTitle } from "../../../atoms/Titles";
import { ButtonDefault } from "../../../atoms/Buttons";

const Hero = () => {
  return (
    <HeroStyles>
      <section>
        <div className="hero-wrapper">
          <div className="hero-content">
            <HeadTitle>Um novo modo de construir uma <span>comunidade profissional</span> no Discord</HeadTitle>
            <SubTitle>Impulsione os números do seu servidor em até <span>60%</span></SubTitle>
            <ButtonDefault>Começar agora</ButtonDefault>
          </div>
        </div>
      </section>
    </HeroStyles>
  );
};

export default Hero;
