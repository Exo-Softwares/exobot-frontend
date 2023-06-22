import { useState } from 'react'
import { Container } from '../../../styles/globals'
import { ApplicationsTemplateWrapper } from './ApplicationsTemplate.styled'
import ApplicationsHeader from '@/components/organisms/Applications/ApplicationsHeader/ApplicationsHeader'
import ApplicationsList from '@/components/organisms/Applications/ApplicationsList/ApplicationsList'
import Loading from '@/components/organisms/Loading/Loading'

const ApplicationsTemplate = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ApplicationsTemplateWrapper>
          <Container className="container">
            <ApplicationsHeader />
            <ApplicationsList />
          </Container>
        </ApplicationsTemplateWrapper>
      )}
    </>
  )
}

export default ApplicationsTemplate
