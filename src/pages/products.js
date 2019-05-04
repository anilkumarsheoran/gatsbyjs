import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Products = ({data,location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      Products Page
    </div>
  </Layout>
)

export default Products
