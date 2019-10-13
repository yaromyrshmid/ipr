import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogCard from "./BlogCard"
import Title from "../Title"
import styles from "../../css/blog.module.css"

const getPosts = graphql`
  query {
    posts: allContentfulBlogs(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          createdAt
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
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
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
