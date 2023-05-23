import Faq from "../../organisms/HomePage/Faq/Faq";
import Hero from "../../organisms/HomePage/Hero/Hero";
import Reasons from "../../organisms/HomePage/Reasons/Reasons";
import Stats from "../../organisms/HomePage/Stats/Stats";
import Pricing from "../../organisms/HomePage/Pricing/Pricing";
import { HomeTemplateWrapper } from "./HomeTemplate.styled";
import { Container } from "../../../styles/globals";

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
  );
};

export default HomeTemplate;
