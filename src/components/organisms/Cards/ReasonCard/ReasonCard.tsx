/* General Imports */
// import { reasonsData } from '../../../../data/reasonsContent'

/* Style Import */
import { Title } from '@/components/atoms/Title'
import { ReasonCardWrapper } from './ReasonCard.styled'
import { Text } from '@/components/atoms/Text'

// const reasons = { reasonsData }

interface ReasonContent {
  title: string
  content: string
}

const ReasonCard = (props: ReasonContent) => {
  return (
    <ReasonCardWrapper>
      <div className="reason-content">
        <Title className="medium-title thin purple-themed white-colored">
          <span>/</span> {props.title}
        </Title>
        <Text>{props.content}</Text>
      </div>
    </ReasonCardWrapper>
  )
}

export default ReasonCard
