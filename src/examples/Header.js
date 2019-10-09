import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          title
          data {
            age
          }
        }
      }
    }
  `)

  console.log(site)
  return (
    <div>
      <h1>title:{site.siteMetadata.title}</h1>
      <h1>author:{site.siteMetadata.author}</h1>
    </div>
  )
}

export default Header
