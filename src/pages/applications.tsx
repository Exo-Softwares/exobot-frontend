/* Dashboard Page */

/* General Imports */
import { signIn } from "next-auth/react";
import { useSession, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { Session } from "inspector";

/* Component Styles */
import ApplicationsPage from "../components/templates/Dashboard/ApplicationsPage";

/* Styles Imports */
import { Container } from "../styles/globals";


interface ServerProps {
  initialBots?: Array<any>;
  user: Session;
}

function Dashboard({ initialBots, user }: ServerProps) {
  return (
    <Container>
      <ApplicationsPage/>
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const response = await fetch(
    `http://localhost:3000/api/bot/user?id=${session.user?.id}`,
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
