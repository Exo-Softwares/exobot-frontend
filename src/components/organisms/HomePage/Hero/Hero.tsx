/* Hero Section (Mainly used at Home) */

/* Style Import */
import Button from "@/components/atoms/Button";
import { HeroWrapper } from "./Hero.styled";

/* Atoms Import */
import Title from "@/components/atoms/Title";

const Hero = () => {
  return (
    <HeroWrapper>
      <section>
        <div className="hero-wrapper">
          <div className="hero-content">
            <Title weight="bold">
              Um novo jeito de construir uma comunidade profissional
              <span>.</span>
            </Title>
            <Title weight="light">
              A melhor ferramenta pra <span>impulsionar os números</span> do seu
              servidor.
            </Title>
            <Button color="purple" icon="RiArrowRightLine">
              Começar agora
            </Button>
          </div>
        </div>
      </section>
    </HeroWrapper>
  );
};

export default Hero;
