import DashboardTemplate from '@/components/templates/DashboardTemplate/DashboardTemplate'
import { LoadingContext } from '@/contexts/LoadingContext'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
  const router = useRouter()

  const pageQuery = useMemo(() => String(router.query.p), [router.query.p])

  // const { applicationActive } = useSelector(
  //   (state: RootState) => state.applications,
  // )

  const { setLoading } = useContext(LoadingContext)

  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true, 'Carregando informações da aplicação...')

    const fetchData = async () => {
      await dispatch.applications.setApplicationAsync(pageQuery)
      // Aqui você pode utilizar a resposta recebida
      setLoading(false)
    }

    fetchData()
  }, [])

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
