import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        siteUrl
        twitterUsername
        siteImage: image
      }
    }
  }
`

const SEO = ({ title, description, image, pathname }) => {
  const { site } = useStaticQuery(getData)

  const {
    siteDesc,
    siteTitle,
    siteUrl,
    siteImage,
    twitterUsername,
  } = site.siteMetadata
  const seo = {
    title: title || siteTitle,
    description: description || siteDesc,
    image: `https:${image}` || `${siteUrl}/${siteImage}`,
    url: `${siteUrl}/${pathname || "/"}`,
  }
  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: "uk" }}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/* facebook card */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

export default SEO
