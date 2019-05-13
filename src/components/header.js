import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// import "./layout.css"

const Header = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulHeader {
          edges{
            node {
              logo {
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
    `}
    render={data => (
        <div className="header">
        <Link to='/'><img src={data.allContentfulHeader.edges[0].node.logo.file.url} /></Link>
        </div>
    )}
  />
)


export default Header
