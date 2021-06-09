import React from 'react'
import HeroImg from '../components/HeroImg'
import Layout from "../components/layout"
import Seo from "../components/seo"

const about = () => {

    return (
      <Layout>
        <Seo title="About" />
        <HeroImg title="About us"/>
      </Layout>
    )
}

export default about