import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { MARKS } from "@contentful/rich-text-types"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import SEO from "../components/SEO"
import BlogCard from "../components/Blog/BlogCard"

const Blog = ({ data }) => {
  const {
    name,
    createdAt,
    author,
    position,
    image,
    post: { json },
    slug,
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
    },
    renderMark: {
      [MARKS.CODE]: embedded => (
        <span
          className={styles.embeddedVideo}
          dangerouslySetInnerHTML={{ __html: embedded }}
        />
      ),
    },
  }

  return (
    <Layout>
      <SEO
        title={name}
        description={`Пост "${name}"`}
        image={image.fluid.src}
        pathname={`blog/${slug}/`}
      />
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
              <h6>
                Автор{author.includes(",") && "и"}: {author}
                {position && <>, {position}</>}
              </h6>
              <h5 className={styles.date}>{createdAt}</h5>
            </div>
          </Col>
        </Row>
        <Row className={styles.richText}>
          <Col>{documentToReactComponents(json, options)}</Col>
        </Row>

        {(data.post.reference || data.referenced.edges.length > 0) && (
          <Row className={styles.otherPostsTitle}>
            <Col xs={12}>
              <h3>Схожі прости:</h3>
            </Col>
          </Row>
        )}
        <Row className={styles.otherPosts}>
          {/* Creating posts referenced by this post */}
          {data.post.reference &&
            data.post.reference.map(post => {
              return <BlogCard key={post.contentful_id} post={post} />
            })}
          {/* Creating posts that reference this post */}
          {data.referenced.edges.length > 0 &&
            data.referenced.edges.map(post => {
              let temp = null
              post.node.name !== name
                ? (temp = (
                    <BlogCard key={post.node.contentful_id} post={post.node} />
                  ))
                : (temp = null)
              return temp
            })}
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
      slug
      position
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      post {
        json
      }
      reference {
        createdAt(formatString: "DD/MM/YYYY")
        slug
        contentful_id
        name
        author
        image {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
    referenced: allContentfulPosts(
      filter: { reference: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          createdAt(formatString: "DD/MM/YYYY")
          name
          slug
          author
          contentful_id
          image {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Blog
