import Faq from '@/components/organisms/HomePage/Faq/Faq'
import Hero from '@/components/organisms/HomePage/Hero/Hero'
import Reasons from '@/components/organisms/HomePage/Reasons/Reasons'
import Stats from '@/components/organisms/HomePage/Stats/Stats'
import Pricing from '@/components/organisms/HomePage/Pricing/Pricing'
import { HomeTemplateWrapper } from './HomeTemplate.styled'
import { Container } from '@/styles/globals'

const HomeTemplate = () => {
  return (
    <HomeTemplateWrapper>
      <Container className="container">
        <Hero />
        <Reasons />
        <Stats />
        <Pricing />
        <Faq />
      </Container>
    </HomeTemplateWrapper>
  )
}

export default HomeTemplate
