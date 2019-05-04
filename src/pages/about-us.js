import React from 'React'
import { graphql } from 'gatsby'
import Layout from "../components/layout"


const Aboutus = ({data, location}) => (
      <Layout location={ location }>
   
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {data.allContentfulAboutUs.edges[0].node.title}
      {data.allContentfulAboutUs.edges[0].node.subTitle}
    </div>
  </Layout>
)

export default Aboutus

export const pageQuery = graphql`
    query {
       allContentfulAboutUs {
        edges {
          node {
            title,
            subTitle ,
            summary {
              summary
            },
            image {
        	file {
        	  url
        	  fileName
        	  contentType
        	}
            }
          }
        }
      }
    }
`