import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Innovation = ({data,location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      Innovation Page
    </div>
  </Layout>
)

export default Innovation
