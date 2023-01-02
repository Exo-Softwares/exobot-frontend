import Head from 'next/head'
import Image from 'next/image'

/* Components Imports */
import PricingPage from '../components/templates/PricingPage/PricingPage';
import { Container } from '../styles/globals'

export default function Home() {
  return (
    <>
      <Container>
        <PricingPage />
      </Container>
    </>
  )
}
