/* Components Imports */
import Faq from "../../organisms/HomePage/Faq/Faq"
import Hero from "../../organisms/HomePage/Hero/Hero"
import Pricing from "../../organisms/HomePage/Pricing/Pricing"
import Stats from "../../organisms/HomePage/Stats/Stats"

/* Styles Imports */
import { HomePageStyles } from "./HomePage.styled"

const HomePage = () => {
  return (
    <HomePageStyles>
     <Hero />
     <Stats />
     <Pricing />
     <Faq />
    </HomePageStyles>
  )
}

export default HomePage