/* Dashboard Page */

/* General Imports */
import { Session } from "next-auth";
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"

/* Component Styles */

/* Styles Imports */
import { Container } from "../styles/globals";
import ApplicationsPage from "../components/templates/Application/ApplicationsPage";


export interface ServerProps {
  initialBots?: Array<any>;
  user: Session;
}

function Dashboard(props: ServerProps) {
  return (
    <Container>
      <ApplicationsPage {...props}/>
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const response = await fetch(
    `http://127.0.0.1:3000/api/bot/user?id=${session.user?.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return {
    props: {
      user: session,
      initialBots: data,
    }, // will be passed to the page component as props
  };
}

export default Dashboard;
