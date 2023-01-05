/* Dashboard Component */

import { Session } from 'next-auth'

/* Styles Imports */
import { ApplicationsStyles } from "./ApplicationsPage.styled"

interface ServerProps {
  initialBots?: Array<any>;
  user: Session;
}

const ApplicationsPage = () => {
  return (
    <ApplicationsStyles>
      
    </ApplicationsStyles>
  )
}

export default ApplicationsPage