import Head from "next/head";
import Image from "next/image";

import { signIn } from "next-auth/react";

import { useSession, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { Session } from "inspector";

interface ServerProps {
  initialBots?: Array<any>;
  user: Session;
}

function Dashboard({ initialBots, user }: ServerProps) {
  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </>
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
