import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Image from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"
import TeamMember from "../components/AboutUs/TeamMember"
import Document from "../components/AboutUs/Document"
import styles from "../css/aboutus.module.css"

const aboutus = ({ data }) => {
  const [boss, ...teamMembers] = data.teamMembers.edges

  return (
    <Layout>
      <SEO title="Про нас" description='Львівське комунальне підприємство
"Інститут просторового розвитку" здійснює проектування вулиць, доріг, громадських просторів, парків, об’єктів житлового та господарського призначення'/>
      <StyledHero img={data.hero.childImageSharp.fluid} />
      <Container className={styles.template}>
        <Row className={styles.aboutCompany}>
          <Col md={6}>
            <div className={styles.imgWrapper}>
              <div className={styles.imgContainer}>
                <Image
                  fluid={data.team.childImageSharp.fluid}
                  alt="main project image"
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
        <Row>
          <Col xs={12} lg={6}>
            <TeamMember node={boss.node} />
          </Col>
        </Row>
        <Row>
          {teamMembers.map(item => {
            return (
              <Col xs={12} lg={6} key={item.node.contentful_id}>
                <TeamMember node={item.node} />
              </Col>
            )
          })}
        </Row>
        <Row>
          <Col xs={12}>
            <h3>Нормативні документи:</h3>
          </Col>
        </Row>
        <Row>
          {data.documents.edges.map(item => {
            console.log(item)
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
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
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
              ...GatsbyContentfulFluid
            }
          }
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
