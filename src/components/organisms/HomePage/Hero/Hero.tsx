/* Hero Section (Mainly used at Home) */

/* Style Import */
import { HeroWrapper } from "./Hero.styled";

/* Atoms Import */
import { TitleBold, TitleLight } from "@/components/atoms/Titles";
import { ButtonPurple } from "@/components/atoms/Buttons";

const Hero = () => {
  return (
    <HeroWrapper>
      <section>
        <div className="hero-wrapper">
          <div className="hero-content">
            <TitleBold
              fontWeight="1000"
              fontSize="max(44px,min(5vw,44px))"
              center
            >
              Um novo jeito de construir uma comunidade profissional
              <span>.</span>
            </TitleBold>
            <TitleLight
              className="description"
              center
              fontSize="27px"
              margin="20px 0px 20px 0px"
            >
              A melhor ferramenta pra <span>impulsionar os números</span> do seu
              servidor.
            </TitleLight>
            <a>
              <ButtonPurple width="180px">Começar agora</ButtonPurple>
            </a>
          </div>
        </div>
      </section>
    </HeroWrapper>
  );
};

export default Hero;
