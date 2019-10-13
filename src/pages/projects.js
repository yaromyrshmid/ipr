import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Projects from "../components/Projects/Projects"
import SEO from "../components/SEO"

const projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="Проекти" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <Projects />
    </Layout>
  )
}

export default projects

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "projectsBg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
