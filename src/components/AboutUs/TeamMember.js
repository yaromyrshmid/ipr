import React from "react"
import Image from "gatsby-image"
import { Row, Col, Container } from "react-bootstrap"

import styles from "../../css/abutus-items.module.css"

const TeamMember = props => {
  return (
    <Container className={styles.wrapper}>
      <Row>
        <Col sm={5} md={3} lg={5}>
          <div className={styles.imageContainer}>
            <Image
              fluid={props.node.image.fluid}
              alt={`${props.node.name} photo`}
              className={styles.image}
            />
          </div>
        </Col>
        <Col sm={7} md={9} lg={7} className={styles.info}>
          <div>
            <h4>{props.node.name}</h4>
            <h5>{props.node.position}</h5>
            <a href={`mailto:${props.node.email}`}>{props.node.email}</a>
            <br />
            <a href={`tel:${props.node.phone}`}>{props.node.phone}</a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TeamMember
