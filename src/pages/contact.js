import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({data,location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      Contact Page
    </div>
  </Layout>
)

export default Contact
