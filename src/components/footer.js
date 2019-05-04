import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"


const footer  = () => (
    <StaticQuery
    query={graphql`
       query {
        allContentfulFooter {
          edges {
            node {
              footerCategories {
                categoryName,
                footerItems {
                  title,
                  slug
                }
              }
            }
          }
        }
      }
    `}
    render = {data => (
       <div>
         {data.allContentfulFooter.edges[0].node.footerCategories && data.allContentfulFooter.edges[0].node.footerCategories.map(category => (
           <div>{category.categoryName}
           {category.footerItems && category.footerItems.map(item => (
             <div><Link to={item.slug}>{item.title}</Link></div>
           ))}
           </div>
         ))}
        
       </div>
    )}
    />
)

export default footer