import General from '@/components/organisms/Dashboard/Sections/General/General'
import Logs from '@/components/organisms/Dashboard/Sections/Logs/Logs'
import Sidebar from '@/components/organisms/Dashboard/Sidebar/Sidebar'
import SimpleNavbar from '@/components/organisms/Dashboard/SimpleNavbar/SimpleNavbar'
import Slider from '@/components/organisms/Dashboard/Slider/Slider'
import Footer from '@/components/organisms/Footer/Footer'
import { useState } from 'react'
import { DashboardTemplateWrapper } from './DashboardTemplate.styled'

const DashboardTemplate = () => {
  const [content, setContent] = useState(1)

  const getContent = (content: number) => {
    setContent(content)
  }

  return (
    <DashboardTemplateWrapper>
      <Sidebar getContent={getContent} />
      <div className="container">
        <div className="wrapper">
          <SimpleNavbar />
          <Slider getContent={getContent} />
          <div className="content">
            {content === 2 && <General />}
            {content === 4 && <Logs />}
          </div>
        </div>
        <div className="footer" style={{ marginTop: '100px' }}>
          <Footer />
        </div>
      </div>
    </DashboardTemplateWrapper>
  )
}

export default DashboardTemplate
