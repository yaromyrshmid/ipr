import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Title from "../Title"
import styles from "../../css/services.module.css"
import services from "../../constants/services"

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="Наші" subtitle="послуги" />
      <Container>
        <Row>
          {services.map((item, index) => {
            return (
              <Col key={index} className={styles.service}>
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Services
