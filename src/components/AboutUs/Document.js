import React from "react"
import { FaFilePdf } from "react-icons/fa"
import { Row, Col, Container } from "react-bootstrap"

import styles from "../../css/abutus-items.module.css"

const TeamMember = props => {
  return (
    <Container className={styles.wrapper}>
      <a
        href={props.node.document.file.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.documentLink}
      >
        <Row>
          <Col xs={2}>
            <FaFilePdf className={styles.icon} />
          </Col>
          <Col xs={8} className={styles.documentName}>
            <h5>{props.node.name}</h5>
          </Col>
        </Row>
      </a>
    </Container>
  )
}

export default TeamMember
