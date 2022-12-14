/* Hero Section (Mainly used at Home) */

/* Style Import */
import { HeroStyles } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroStyles>
      <section>
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>Um novo modo de construir uma <span>comunidade profissional</span> no Discord</h1>
            <p>Impulsione os números do seu servidor em até <span>60%</span></p>
            <button>Começar agora</button>
          </div>
          <div className="hero-objects">
            <div className="object">
              <div className="object-image"></div>
              <div className="object-content">
                <h1><span>/</span> Crie um bot exclusivo para o seu servidor</h1>
                <p>Personalize da maneira que quiser de forma rápida e intuitiva!</p>
              </div>
            </div>
            <div className="object">
              <div className="object-image"></div>
              <div className="object-content">
                <h1><span>/</span> Nós hospedamos e cuidamos da parte difícil</h1>
                <p>Você não precisa se preocupar com a parte entediante, nós cuidamos de tudo para você ter a melhor experiência possível.</p>
              </div>
            </div>
            <div className="object">
              <div className="object-image"></div>
              <div className="object-content">
                <h1><span>/</span> O suporte mais dinâmico do mercado</h1>
                <p>Iremos te ajudar no que precisar quando quiser, sem custos adicionais. Você não vai ficar na mão!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HeroStyles>
  );
};

export default Hero;
