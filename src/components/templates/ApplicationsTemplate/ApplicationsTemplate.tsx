import { Container } from '../../../styles/globals'
import { ApplicationsTemplateWrapper } from './ApplicationsTemplate.styled'
import ApplicationsHeader from '@/components/organisms/Applications/ApplicationsHeader/ApplicationsHeader'
import ApplicationsList from '@/components/organisms/Applications/ApplicationsList/ApplicationsList'

const ApplicationsTemplate = (props: any) => {
  return (
    <ApplicationsTemplateWrapper>
      <Container className="container">
        <ApplicationsHeader />
        <ApplicationsList />
      </Container>
    </ApplicationsTemplateWrapper>
  )
}

export default ApplicationsTemplate
