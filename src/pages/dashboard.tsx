import DashboardTemplate from '@/components/templates/DashboardTemplate/DashboardTemplate'
import Head from 'next/head'

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DashboardTemplate />
      </main>
    </>
  )
}

export default Dashboard
