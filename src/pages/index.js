import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default ({ data }) => (
  <Layout>
    <StyledHero home={true} img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Діяльність"
        info="Проектування вулиць, доріг, громадських просторів, парків, об’єктів житлового та господарського призначення."
      >
        <AniLink fade to="/projects" className="btn-white">
          Проекти
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "dvirtseva1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
