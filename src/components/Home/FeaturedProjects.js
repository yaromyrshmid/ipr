import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Container, Row } from "react-bootstrap"

import Title from "../Title"
import Project from "../Projects/Project"
import styles from "../../css/items.module.css"

const getProjects = graphql`
  query {
    featuredProjects: allContentfulProjects(
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          name
          slug
          city
          author
          contentful_id
          implemented
          images {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedProjects = () => {
  const response = useStaticQuery(getProjects)
  const projects = response.featuredProjects.edges
  return (
    <section className={styles.projects}>
      <Title title="Нові" subtitle="проекти" />
      <Container className={styles.center}>
        <Row>
          {projects.map(({ node }) => {
            return <Project key={node.contentful_id} project={node} />
          })}
        </Row>
      </Container>
      <AniLink fade to="/projects" className="btn-primary">
        Усі проекти
      </AniLink>
    </section>
  )
}

export default FeaturedProjects
