import Sidebar from '@/components/organisms/Dashboard/Sidebar/Sidebar'
import { DashboardTemplateWrapper } from './DashboardTemplate.styled'
import SimpleNavbar from '@/components/organisms/Dashboard/SimpleNavbar/SimpleNavbar'
import { useState } from 'react'
import General from '@/components/organisms/Dashboard/Sections/General/General'

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
        <div className="content-wrapper">
          <div className="content">{content === 1 && <General />}</div>
        </div>
      </div>
    </DashboardTemplateWrapper>
  )
}

export default DashboardTemplate
