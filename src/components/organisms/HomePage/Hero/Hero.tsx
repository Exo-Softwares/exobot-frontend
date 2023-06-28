/* Hero Section (Mainly used at Home) */

/* Style Import */
import Button from '@/components/atoms/Button'
import { HeroWrapper } from './Hero.styled'

/* Atoms Import */
import { Title } from '@/components/atoms/Title'
import { Text } from '@/components/atoms/Text'
import HeroPill from '@/components/molecules/HeroPill/HeroPill'

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
            <div className="hero-banner">
              <div className="background" />
              <div className="column">
                <HeroPill content="Dashboard" />
                <HeroPill content="Customizável" />
              </div>
              <div className="column">
                <HeroPill content="Seguro" />
                <HeroPill content="Automático" />
                <HeroPill content="Inovador" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </HeroWrapper>
  )
}

export default Hero
