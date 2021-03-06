import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

import Title from "../Title"
import styles from "../../css/about.module.css"
import { Container, Row, Col } from "react-bootstrap"

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)

  return (
    <section className={styles.about}>
      <Title title="Хто" subtitle="ми?" />
      <Container className={styles.aboutContent}>
        <Row>
          <Col md={6}>
            <article className={styles.aboutImg}>
              <div className={styles.imgContainer}>
                <Img fluid={aboutImage.childImageSharp.fluid} alt="team" />
              </div>
            </article>
          </Col>
          <Col md={6}>
            <article className={styles.aboutInfo}>
              <p>
                Команда фахівців, що проектують безпечні, зручні для всіх міські
                простори за кращими європейськими зразками.
              </p>
              <p>
                Підприємство комунальної форми власності, що розташоване у
                Львові та здійснює діяльність на території України.
              </p>
              <AniLink
                fade
                to="/aboutus"
                className={`btn-primary ${styles.btnPrimary}`}
              >
                Дізнатись більше
              </AniLink>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
