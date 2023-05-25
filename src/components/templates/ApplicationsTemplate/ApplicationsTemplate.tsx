import { Container } from "../../../styles/globals";
import { ApplicationsTemplateWrapper } from "./ApplicationsTemplate.styled";
import ApplicationsHeader from "@/components/organisms/Applications/ApplicationsHeader/ApplicationsHeader";
import ApplicationsList from "@/components/organisms/Applications/ApplicationsList/ApplicationsList";

const ApplicationsTemplate = (props: any) => {
  return (
    <Container>
      <ApplicationsTemplateWrapper>
        <ApplicationsHeader />
        <ApplicationsList />
      </ApplicationsTemplateWrapper>
    </Container>
  );
};

export default ApplicationsTemplate;
