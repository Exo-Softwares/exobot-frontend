import Sidebar from '@/components/organisms/Dashboard/Sidebar/Sidebar'
import { DashboardTemplateWrapper } from './DashboardTemplate.styled'
import SimpleNavbar from '@/components/organisms/Dashboard/SimpleNavbar/SimpleNavbar'
import { useState } from 'react'

const DashboardTemplate = () => {
  const [content, setContent] = useState(0)

  const getContent = (content: number) => {
    setContent(content)
  }

  return (
    <DashboardTemplateWrapper>
      <Sidebar getContent={getContent} />
      <div className="container">
        <SimpleNavbar />
        <div className="content">{content === 1 && <p>teste</p>}</div>
      </div>
    </DashboardTemplateWrapper>
  )
}

export default DashboardTemplate
