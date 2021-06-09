import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Featured from '../components/Featured'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Featured />
  </Layout>
)

export default IndexPage
