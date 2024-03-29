/* Home Page */

/* Components Imports */
import HomeTemplate from '@/components/templates/HomeTemplate/HomeTemplate'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Exobot</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeTemplate />
      </main>
    </>
  )
}

export default Home
