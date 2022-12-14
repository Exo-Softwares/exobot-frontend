/* Components Imports */
import Hero from "../../organisms/HomePage/Hero/Hero"
import Stats from "../../organisms/HomePage/Stats/Stats"
import { HomePageStyles } from "./HomePage.styled"

const HomePage = () => {
  return (
    <HomePageStyles>
     <Hero />
     <Stats />
    </HomePageStyles>
  )
}

export default HomePage