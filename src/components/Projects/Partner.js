import React from "react"
import { Col } from "react-bootstrap"

import styles from "../../css/partner.module.css"

const Partner = props => {
  return (
    <Col xs={6} sm={4} md={3} xl={2}>
      <a
        className={styles.partner}
        href={props.partner.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.imgContainer}>
          <img src={props.partner.logo} alt={`${props.partner.name} лого`} />
        </div>
        <div className={styles.nameContainer}>
          <h5>{props.partner.name}</h5>
        </div>
      </a>
    </Col>
  )
}

export default Partner
