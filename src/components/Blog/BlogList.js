import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row } from "react-bootstrap"

import BlogCard from "./BlogCard"
import Title from "../Title"
import styles from "../../css/blog.module.css"

const getPosts = graphql`
  query {
    posts: allContentfulPosts(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          createdAt(formatString: "DD/MM/YYYY")
          slug
          name
          author
          contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)

  return (
    <section className={styles.blog}>
      <Title title="Блог" />
      <Container className={styles.center}>
        <Row>
          {posts.edges.map(({ node }) => {
            return <BlogCard key={node.contentful_id} post={node} />
          })}
        </Row>
      </Container>
      <div className={styles.center}></div>
    </section>
  )
}

export default BlogList
