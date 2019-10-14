import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Container, Row, Col } from "react-bootstrap"

import Title from "../Title"
import Project from "../Projects/Project"
import styles from "../../css/items.module.css"

const getProjects = graphql`
  query {
    featuredProjects: allContentfulProjects(
      filter: { featured: { eq: true } }
      sort: { fields: createdAt, order: ASC }
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
              src
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
        <Row>
          <Col className={styles.centerBtn}>
            <AniLink fade to="/projects" className="btn-primary">
              Усі проекти
            </AniLink>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FeaturedProjects
