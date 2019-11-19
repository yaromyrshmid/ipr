import React from "react"
import ProjectList from "./ProjectList"
import { useStaticQuery, graphql } from "gatsby"

const getProjects = graphql`
  query {
    projects: allContentfulProjects(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          name
          slug
          city
          author
          contentful_id
          implemented
          category
          images {
            fluid(quality: 90, maxWidth: 540) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Projects = () => {
  const { projects } = useStaticQuery(getProjects)

  return <ProjectList projects={projects} />
}

export default Projects
