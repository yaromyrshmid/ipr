import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { FaMapMarkerAlt } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Container, Row, Col } from "react-bootstrap"
import BeforeAfterSlider from "react-before-after-slider"

import Layout from "../components/Layout"
import ImageWithZoom from "../components/ImageWithZoom"
import styles from "../css/template.module.css"
import Project from "../components/Projects/Project"
import SEO from "../components/SEO"

const Template = ({ data }) => {
  const {
    name,
    city,
    author,
    description: { json },
    images,
  } = data.project

  const [mainImage, ...projectImages] = images
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <img
            width="100%"
            src={node.data.target.fields.file["en-US"].url}
            className={styles.image}
            alt="project"
          />
        )
      },
      "embedded-entry-block": node => {
        let width = 0
        let height = 0
        if (window.innerWidth > 1200) {
          console.log(window.innerWidth)
          width = 1110
          height = 624
        } else if (window.innerWidth > 992) {
          width = 930
          height = 523
        } else if (window.innerWidth > 768) {
          width = 690
          height = 388
        } else if (window.innerWidth > 576) {
          width = 510
          height = 287
        } else if (window.innerWidth > 500) {
          width = 470
          height = 264
        } else if (window.innerWidth > 400) {
          width = 370
          height = 208
        } else if (window.innerWidth > 300) {
          width = 270
          height = 152
        } else {
          width = 200
          height = 113
        }
        return (
          <span>
            <BeforeAfterSlider
              before={
                node.data.target.fields.images["en-US"][0].fields.file["en-US"]
                  .url
              }
              after={
                node.data.target.fields.images["en-US"][1].fields.file["en-US"]
                  .url
              }
              width={width}
              height={height}
            />
          </span>
        )
      },
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
                  fluid={mainImage.fluid}
                  alt="main project image"
                  className={styles.image}
                />
              </div>
            </div>
          </Col>
          <Col lg={5} className={styles.titleWrapper}>
            <div>
              <h3>{name}</h3>
              <h4 className={styles.city}>
                <FaMapMarkerAlt className={styles.icon} />
                {city}
              </h4>
              <h6>Автор: {author}</h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{documentToReactComponents(json, options)}</Col>
        </Row>
        {projectImages.length > 0 && (
          <Row className={styles.gallery}>
            <Col xs={12}>
              <h3>Галерея:</h3>
            </Col>
            {projectImages.map((item, index) => {
              return (
                <Col key={index} xs={12} md={6} className={styles.galleryImage}>
                  <ImageWithZoom fluid={item.fluid} />
                </Col>
              )
            })}
          </Row>
        )}

        {(data.project.reference || data.referenced.edges.length > 0) && (
          <Row>
            <Col xs={12}>
              <h3>Схожі проекти:</h3>
            </Col>
          </Row>
        )}
        <Row className={styles.otherProjects}>
          {/* Creating projects referenced by this project */}
          {data.project.reference &&
            data.project.reference.map(project => {
              return <Project key={project.contentful_id} project={project} />
            })}
          {/* Creating projects that reference this project */}
          {data.referenced.edges.length > 0 &&
            data.referenced.edges.map(project => {
              let temp = null
              project.node.name !== name
                ? (temp = (
                    <Project
                      key={project.node.contentful_id}
                      project={project.node}
                    />
                  ))
                : (temp = null)
              return temp
            })}
        </Row>

        <AniLink fade to="/projects" className="btn-primary">
          Назад до проектів
        </AniLink>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: contentfulProjects(slug: { eq: $slug }) {
      name
      city
      author
      description {
        json
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      reference {
        slug
        contentful_id
        name
        author
        city
        implemented
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    referenced: allContentfulProjects(
      filter: { reference: { elemMatch: { slug: { eq: $slug } } } }
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
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Template
