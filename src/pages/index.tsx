import Head from 'next/head'
import Image from 'next/image'

/* Components Imports */
import HomePage from '../components/templates/HomePage'
import { Container } from '../styles/globals'

export default function Home() {
  return (
    <>
      <Container>
        <HomePage />
      </Container>
    </>
  )
}
