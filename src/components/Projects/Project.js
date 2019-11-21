import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaMapMarkerAlt } from "react-icons/fa"
import propTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Col, Row } from "react-bootstrap"

import styles from "../../css/project.module.css"

const getDefaultImg = graphql`
  query {
    file(relativePath: { eq: "fail.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Project = ({ project }) => {
  const defaultImgData = useStaticQuery(getDefaultImg)

  const { name, slug, city, author, implemented, images } = project
  let mainImage = images
    ? images[0].fluid
    : defaultImgData.file.childImageSharp.fluid

  return (
    <Col md={6}>
      <AniLink fade to={`/projects/${slug}`}>
        <article className={styles.project}>
          {implemented && (
            <span className={styles.label}>
              <span className={styles.labelText}>{implemented}</span>
            </span>
          )}
          <div className={styles.imgContainer}>
            <Image
              fluid={mainImage}
              className={styles.img}
              alt="single project"
            />
            <div className={styles.link}>Більше</div>
          </div>
          <div className={styles.footer}>
            <Row>
              <Col>
                <h3>{name}</h3>
              </Col>
            </Row>

            <Row className={styles.info}>
              <Col xs={5}>
                <h4 className={styles.city}>
                  <FaMapMarkerAlt className={styles.icon} />
                  {city}
                </h4>
              </Col>

              <Col xs={7} className={styles.details}>
                <h6>
                  Автор{author.includes(",") && "и"}: {author}
                </h6>
              </Col>
            </Row>
          </div>
        </article>
      </AniLink>
    </Col>
  )
}

Project.propTypes = {
  project: propTypes.shape({
    name: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.object).isRequired,
  }),
}

export default Project
