import React from "react"
import Title from "../Title"
import { Container, Row, Col } from "react-bootstrap"

import ContactForm from "./ContactForm"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="Контакти" />
      <Container>
        <Row className={styles.topRow}>
          <Col lg={7}>
            <div className={styles.mapWrapper}>
              <div className={styles.mapFrame}>
                <iframe
                  className={styles.map}
                  id="gmap_canvas"
                  src={
                    "https://maps.google.com/maps?q=%D0%86%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82%20%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%20%D1%80%D0%BE%D0%B7%D0%B2%D0%B8%D1%82%D0%BA%D1%83&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  }
                />
              </div>
            </div>
          </Col>
          <Col lg={5} className={styles.addressWrapper}>
            <div>
              <h5>
                79008, Львів, Смольського, 4
                <br />
                <br />
                <a href="tel:+380322975110">+38 (032) 297 51 10 </a>
                <br />
                <br />
                <a href="mailto:email@email.com">email@email.com</a>
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
      <Title title="Напишіть" subtitle="нам" />
      <Container>
        <Row>
          <ContactForm />
        </Row>
      </Container>
    </section>
  )
}

export default Contact
