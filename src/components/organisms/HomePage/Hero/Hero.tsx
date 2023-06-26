/* Hero Section (Mainly used at Home) */

/* Style Import */
import Button from '@/components/atoms/Button'
import { HeroWrapper } from './Hero.styled'

/* Atoms Import */
import { Title } from '@/components/atoms/Title'
import { Text } from '@/components/atoms/Text'
import Image from 'next/image'
import Teste from '@/assets/teste.png'

const Hero = () => {
  return (
    <HeroWrapper>
      <section>
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="content">
              <Title className="large-title bold white-colored">
                Um novo jeito de construir uma comunidade profissional
                <span>.</span>
              </Title>
              <Text className="medium-text thin description">
                A melhor ferramenta pra <strong>impulsionar os números </strong>
                do seu servidor.
              </Text>
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
