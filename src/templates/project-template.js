import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { FaMapMarkerAlt } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/Layout"
import ImageWithZoom from "../components/ImageWithZoom"
import styles from "../css/template.module.css"
import Project from "../components/Projects/OtherProject"
import SEO from "../components/SEO"

const Template = ({ data }) => {
  const {
    name,
    city,
    author,
    description: { json },
    images,
    otherProjects,
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
    },
  }

  // const optionsOtherProjects = {
  //   renderNode: {
  //     "embedded-entry-block": node => {
  //       console.log(node.data.target.fields)

  //       const {
  //         name,
  //         slug,
  //         city,
  //         author,
  //         implemented,
  //         images,
  //       } = node.data.target.fields
  //       const project = {
  //         name: name["en-US"],
  //         slug: slug["en-US"],
  //         city: city["en-US"],
  //         author: author["en-US"],
  //         implemented: implemented["en-US"],
  //         images: images["en-US"],
  //       }
  //       console.log(project)

  //       return <Project project={project} />
  //     },
  //   },
  // }

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

        {/* {otherProjects && (
          <Row>
            <Col xs={12}>
              <h3>Схожі проекти:</h3>
            </Col>
            {documentToReactComponents(
              otherProjects.json,
              optionsOtherProjects
            )}
          </Row>
        )} */}

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
      otherProjects {
        json
      }
    }
  }
`

export default Template
