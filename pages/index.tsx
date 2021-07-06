import Link from 'next/link'
import React, { useContext } from 'react'
import Contact from '../components/Contact'
import CustomerBenefits from '../components/CustomerBenefits'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Process from '../components/Process'
import Services from '../components/Services'
import { GlobalContext } from '../contexts/GlobalContext'

const IndexPage = () => {
  const { companyName } = useContext(GlobalContext);
  return(
    <Layout title={`Home | ${companyName}`}
            description={`Home page for visitors looking for information regarding Conversion Rate Optimisation services provided by ${companyName}`}
    >
      <Hero />
      <Services />
      <Process />
      <CustomerBenefits />
      <Contact />
    </Layout>
  )
}

export default IndexPage
