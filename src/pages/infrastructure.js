import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Infrastructre = ({data,location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      Infrastructre Page
    </div>
  </Layout>
)

export default Infrastructre
