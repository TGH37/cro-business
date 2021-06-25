import Link from 'next/link'
import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Services from '../components/Services'
import { GlobalContext } from '../contexts/GlobalContext'

const IndexPage = () => {
  const { companyName } = useContext(GlobalContext);
  return(
    <Layout title={`Home | ${companyName}`}>
      <Hero />
      <Services />
    </Layout>
  )
}

export default IndexPage
