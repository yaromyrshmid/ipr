import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Image from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"
import Team from "../components/AboutUs/Team"
import Document from "../components/AboutUs/Document"
import styles from "../css/aboutus.module.css"

const aboutus = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Про нас"
        description='Львівське комунальне підприємство
"Інститут просторового розвитку" здійснює проектування вулиць, доріг, громадських просторів, парків, об’єктів житлового та господарського призначення'
        pathname="aboutus"
      />
      <StyledHero img={data.hero.childImageSharp.fluid} />
      <Container className={styles.template}>
        <Row className={styles.aboutCompany}>
          <Col md={6}>
            <div className={styles.imgWrapper}>
              <div className={styles.imgContainer}>
                <Image
                  fluid={data.team.childImageSharp.fluid}
                  alt="team"
                  className={styles.image}
                />
              </div>
            </div>
          </Col>
          <Col md={6} className={styles.titleWrapper}>
            <div>
              <h3>
                Львівське комунальне підприємство <br />
                "Інститут просторового розвитку"
              </h3>
              <p>
                Підприємство створене з метою розвитку інноваційних проектів у
                сфері проектування вулиць, доріг, громадських просторів, парків,
                об’єктів житлового та господарського призначення.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>Команда:</h3>
          </Col>
        </Row>
        <Team teamMembers={data.teamMembers.edges} />
        <Row>
          <Col xs={12}>
            <h3>Нормативні документи:</h3>
          </Col>
        </Row>
        <Row>
          {data.documents.edges.map(item => {
            return (
              <Col xs={12} sm={6} lg={4} key={item.node.contentful_id}>
                <Document node={item.node} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export default aboutus

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "aboutus.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 3000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    teamMembers: allContentfulTeam(sort: { fields: createdAt, order: ASC }) {
      edges {
        node {
          name
          position
          email
          phone
          contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          department
          head
        }
      }
    }
    documents: allContentfulDocuments(sort: { fields: createdAt, order: ASC }) {
      edges {
        node {
          contentful_id
          name
          document {
            file {
              url
            }
          }
        }
      }
    }
  }
`
