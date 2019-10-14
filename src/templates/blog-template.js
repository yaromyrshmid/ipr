import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import SEO from "../components/SEO"

const Blog = ({ data }) => {
  const {
    name,
    createdAt,
    author,
    image,
    post: { json },
  } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <img
            width="100%"
            src={node.data.target.fields.file["en-US"].url}
            className={styles.image}
            alt="blog"
          />
        )
      },
      // "embedded-entry-block": node => {
      //   console.log(node.data.target.fields)

      //   const { title, image, text } = node.data.target.fields
      //   return (
      //     <div>
      //       <h1>other post: {title["en-US"]}</h1>
      //       <img
      //         width="400"
      //         src={image["en-US"].fields.file["en-US"].url}
      //         alt="other post image"
      //       />
      //       {documentToReactComponents(text["en-US"])}
      //     </div>
      //   )
      // },
    },
  }

  return (
    <Layout>
      <SEO title={name} />
      <Container className={styles.template}>
        <Row className={styles.topRow}>
          <Col lg={7}>
            <div className={styles.imgWrapper}>
              <div className={styles.imgContainer}>
                <Image
                  fluid={image.fluid}
                  alt="main project image"
                  className={styles.image}
                />
              </div>
            </div>
          </Col>
          <Col lg={5} className={styles.titleWrapper}>
            <div>
              <h3>{name}</h3>
              <br />
              <h6>Автор: {author}</h6>
              <br />
              <h5 className={styles.date}>{createdAt}</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{documentToReactComponents(json, options)}</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>Схожі пости:</h3>
          </Col>
        </Row>
        <AniLink fade to="/blog" className="btn-primary">
          Усі пости
        </AniLink>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPosts(slug: { eq: $slug }) {
      createdAt(formatString: "DD/MM/YYYY")
      name
      author
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      post {
        json
      }
    }
  }
`

export default Blog
