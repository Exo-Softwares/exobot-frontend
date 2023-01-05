/* Home Page */

/* Components Imports */
import PricingPage from '../components/templates/PricingPage/PricingPage';

import { Session } from 'next-auth'

import { getSession } from 'next-auth/react'

/* Styles Imports */
import { Container } from '../styles/globals'

export default function Home(user: Session) {
  return (
    <>
      <Container>
        <PricingPage {...user}/>
      </Container>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props: {
      user: session,
    }, // will be passed to the page component as props
  };
<<<<<<< HEAD
}
=======
}
>>>>>>> 68b8d3b4a062ec49a490cd12b55393cf96f7ab93
