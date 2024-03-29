/* Reasons Section (Mainly used at Home) */

/* General Imports */
import { reasonsData } from '../../../../data/reasonsContent'

import ReasonCard from '../../Cards/ReasonCard/ReasonCard'
import { ReasonsWrapper } from './Reasons.styled'

const Reasons = () => {
  return (
    <ReasonsWrapper>
      {reasonsData.map((reason, index) => (
        <ReasonCard key={index} title={reason.title} content={reason.content} />
      ))}
    </ReasonsWrapper>
  )
}

export default Reasons
