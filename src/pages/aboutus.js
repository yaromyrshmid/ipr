import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Image from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"
import TeamMember from "../components/AboutUs/TeamMember"
import styles from "../css/aboutus.module.css"

const aboutus = ({ data }) => {
  const [boss, ...teamMembers] = data.teamMembers.edges
  console.log(boss.node)

  return (
    <Layout>
      <SEO title="Про нас" />
      <StyledHero img={data.hero.childImageSharp.fluid} />
      <Container className={styles.template}>
        <Row>
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
          <Col xs={12}>
            <TeamMember node={boss.node} />
          </Col>
          <Col>Team members</Col>
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
    teamMembers: allContentfulTeam {
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
        }
      }
    }
  }
`
