import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"

const error = ({ data }) => {
  return (
    <Layout>
      <SEO title="404" description="Сторінки не знайдено" />
      <StyledHero home={true} img={data.errorBcg.childImageSharp.fluid}>
        <Banner title="Сторінки не знайдено">
          <AniLink fade to="/" className="btn-white">
            Повернутись на головну
          </AniLink>
        </Banner>
      </StyledHero>
    </Layout>
  )
}

export default error

export const query = graphql`
  query {
    errorBcg: file(relativePath: { eq: "error.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
