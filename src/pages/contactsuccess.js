import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Title from "../components/Title"
import SEO from "../components/SEO"
import styles from "../css/contactsuccess.module.css"
import { Container, Row, Col } from "react-bootstrap"

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Контакти"
        description='Контакти Львівського комунального підприємства "Інститут просторового розвитку"'
        pathname="contact"
      />
      <StyledHero img={data.connectBcg.childImageSharp.fluid} />
      <Title
        className={styles.titleSuccess}
        title="Дякуємо!"
        subtitle="Ваше повідомлення надіслано"
      />
      {/* Photo by Richard Lee on Unsplash */}
      <Container>
        <Row>
          <Col>
            <div className={styles.imgContainer}>
              <Img fluid={data.owl.childImageSharp.fluid} alt="owl" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={styles.centerBtn}>
            <AniLink fade to="/" className="btn-primary">
              На головну
            </AniLink>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default contact

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "contacts.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    owl: file(relativePath: { eq: "owl.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
