import { Container } from '../../../styles/globals'
import { ApplicationsTemplateWrapper } from './ApplicationsTemplate.styled'
import ApplicationsHeader from '@/components/organisms/Applications/ApplicationsHeader/ApplicationsHeader'
import ApplicationsList from '@/components/organisms/Applications/ApplicationsList/ApplicationsList'

const ApplicationsTemplate = () => {
  return (
    <>
      <ApplicationsTemplateWrapper>
        <Container className="container">
          <ApplicationsHeader />
          <ApplicationsList />
        </Container>
      </ApplicationsTemplateWrapper>
    </>
  )
}

export default ApplicationsTemplate
