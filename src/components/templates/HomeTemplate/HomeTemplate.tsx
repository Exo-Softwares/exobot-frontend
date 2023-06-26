import Faq from '@/components/organisms/HomePage/Faq/Faq'
import Hero from '@/components/organisms/HomePage/Hero/Hero'
import Reasons from '@/components/organisms/HomePage/Reasons/Reasons'
import Stats from '@/components/organisms/HomePage/Stats/Stats'
import { HomeTemplateWrapper } from './HomeTemplate.styled'
import { Container } from '@/styles/globals'
import Products from '@/components/organisms/HomePage/Products/Products'

const HomeTemplate = () => {
  return (
    <HomeTemplateWrapper>
      <Container className="container">
        <Hero />
        <Reasons />
        <Stats />
        <Products />
        <Faq />
      </Container>
    </HomeTemplateWrapper>
  )
}

export default HomeTemplate
