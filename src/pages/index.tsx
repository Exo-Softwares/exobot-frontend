import Head from 'next/head'
import HomeTemplate from '@/components/templates/HomeTemplate/HomeTemplate'
import ProtectedComponent from '@/utils/protectedComponent'

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
        <ProtectedComponent>
          <HomeTemplate />
        </ProtectedComponent>
      </main>
    </>
  )
}

export default Home
