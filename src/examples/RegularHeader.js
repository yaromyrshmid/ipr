import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query SecondQuery {
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
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        console.log(data)
        return (
          <div>
            <h1>{data.site.siteMetadata.title}</h1>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
