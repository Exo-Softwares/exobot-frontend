/* Hero Section (Mainly used at Home) */

/* Style Import */
import Button from '@/components/atoms/Button'
import { HeroWrapper } from './Hero.styled'

/* Atoms Import */
import Title from '@/components/atoms/Title'
import Image from 'next/image'
import Teste from '@/assets/teste.png'

const Hero = () => {
  return (
    <HeroWrapper>
      <section>
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="content">
              <Title weight="bold" fontSize="40px">
                Um novo jeito de construir uma comunidade profissional
                <span>.</span>
              </Title>
              <Title className="description" weight="light" fontSize="24px">
                A melhor ferramenta pra <strong>impulsionar os números</strong>{' '}
                do seu servidor.
              </Title>
              <Button color="purple" icon="RiArrowRightLine">
                Começar agora
              </Button>
            </div>
            <div className="image">
              <Image src={Teste} alt="teste" />
            </div>
          </div>
        </div>
      </section>
    </HeroWrapper>
  )
}

export default Hero
