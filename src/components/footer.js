import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import "./footer.scss"

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
       <div className='footer row'>
        <div className="container col-xs-12 col-sm-12 row"> 
         {data.allContentfulFooter.edges[0].node.footerCategories && data.allContentfulFooter.edges[0].node.footerCategories.map(category => (
           <div className={`col-xs-12 col-sm-${12/data.allContentfulFooter.edges[0].node.footerCategories.length}`}>{category.categoryName}
           {category.footerItems && category.footerItems.map(item => (
             <div className="col-xs-12"><Link to={item.slug}>{item.title}</Link></div>
           ))}
           </div>
         ))}
        </div>
       </div>
    )}
    />
)

export default footer