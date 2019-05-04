import React from "React"
import { StaticQuery, graphql, Link } from "gatsby"
import "./navigation.css"
import { classNames } from 'classnames'


const navigation  = ({location}) => (
    // const linkClassName = classNames("navigation_link",{"active":location.pathname === nav.slug})
    <StaticQuery
    query={graphql`
      query {
        allContentfulNavigation {
          edges {
            node {
              navigationItem {
                slug,
                linkTitle
              }
            }
          }
        }
      }
    `}
    render = {data => (
        <ul className="navigation">
          {data.allContentfulNavigation.edges[0].node.navigationItem && data.allContentfulNavigation.edges[0].node.navigationItem.map(nav => (<li className={`navigation_list ${location.pathname === nav.slug ? 'navigation_list--active': ''}`}>
            <Link className="navigation_link" to={nav.slug} >{nav.linkTitle}</Link>
           </li>))}
        </ul>
    )}
    />
)


export default navigation