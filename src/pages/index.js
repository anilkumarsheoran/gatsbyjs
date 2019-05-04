import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data,location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {data.contentfulHome.aboutUs.aboutUs}
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
  contentfulHome {
    aboutUs {
      aboutUs 
    }
    career {
      career
    }
    ourInnovation {
      ourInnovation
    }
  }
}`