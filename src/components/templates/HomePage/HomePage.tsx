/* Components Imports */
import Faq from "../../organisms/HomePage/Faq/Faq"
import Hero from "../../organisms/HomePage/Hero/Hero"
import Reasons from "../../organisms/HomePage/Reasons/Reasons"
import Stats from "../../organisms/HomePage/Stats/Stats"
import Pricing from "../../organisms/HomePage/Pricing/Pricing"

/* Styles Imports */
import { HomePageStyles } from "./HomePage.styled"

const HomePage = () => {
  return (
    <HomePageStyles>
     <Hero />
     <Reasons />
     <Stats />
     <Pricing />
     <Faq />
    </HomePageStyles>
  )
}

export default HomePage