import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { FaMapMarkerAlt } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Container, Row, Col } from "react-bootstrap"
import BeforeAfterSlider from "react-before-after-slider"

import Layout from "../components/Layout"
import Gallery from "../components/Projects/Gallery"
import styles from "../css/template.module.css"
import Project from "../components/Projects/Project"
import SEO from "../components/SEO"
import Partner from "../components/Projects/Partner"

const Template = ({ data }) => {
  const {
    name,
    city,
    author,
    description: { json },
    partners,
    images,
    slug,
  } = data.project

  const [mainImage, ...projectImages] = images

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <>
            <img
              width="100%"
              src={node.data.target.fields.file["en-US"].url}
              className={styles.image}
              alt="project"
            />
            <p />
          </>
        )
      },
      "embedded-entry-block": node => {
        let width = 0
        let height = 0
        if (typeof window !== "undefined") {
          if (window.innerWidth > 1200) {
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
                  node.data.target.fields.images["en-US"][1].fields.file[
                    "en-US"
                  ].url
                }
                after={
                  node.data.target.fields.images["en-US"][0].fields.file[
                    "en-US"
                  ].url
                }
                width={width}
                height={height}
              />
            </span>
          )
        } else {
          return null
        }
      },
    },
  }
  const optionsPartners = {
    renderNode: {
      "embedded-entry-block": node => {
        const partner = {
          name: node.data.target.fields.name["en-US"],
          link: node.data.target.fields.link
            ? node.data.target.fields.link["en-US"]
            : null,
          logo: node.data.target.fields.logo["en-US"].fields.file["en-US"].url,
        }
        return <Partner partner={partner} />
      },
    },
  }

  return (
    <Layout>
      <SEO
        title={name}
        description={`Проект Інституту просторового розвитку: ${name}`}
        image={mainImage.fluid.src}
        pathname={`projects/${slug}/`}
      />
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
        <Row className={styles.richText}>
          <Col>{documentToReactComponents(json, options)}</Col>
        </Row>

        <Gallery projectImages={projectImages} />

        {partners && (
          <Row className={styles.block}>
            <Col xs={12}>
              <h3>Партнери:</h3>
            </Col>
            {documentToReactComponents(partners.json, optionsPartners)}
          </Row>
        )}

        {(data.project.reference || data.referenced.edges.length > 0) && (
          <Row>
            <Col xs={12}>
              <h3>Схожі проекти:</h3>
            </Col>
          </Row>
        )}
        <Row className={styles.block}>
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
      slug
      city
      author
      description {
        json
      }
      partners {
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
