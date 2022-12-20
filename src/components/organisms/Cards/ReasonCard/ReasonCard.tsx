/* General Imports */
import { reasonsData } from '../../../../data/reasonsContent';

/* Style Import */
import { ReasonCardStyles } from "./ReasonCard.styled"

const reasons = { reasonsData }

interface ReasonContent {
  title: string;
  content: string;
}

const ReasonCard = (props: ReasonContent) => {
  return (
    <ReasonCardStyles>
      <div className="reason-content">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </ReasonCardStyles>
  )
}

export default ReasonCard