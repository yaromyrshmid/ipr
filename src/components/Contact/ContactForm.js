import React from "react"
import { Col } from "react-bootstrap"

import styles from "../../css/contact.module.css"

const ContactForm = () => {
  return (
    <Col md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
      <form
        className={styles.form}
        action="https://formspree.io/a@gmail.com"
        method="POST"
      >
        <div>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.formControl}
            placeholder="Ім'я"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.formControl}
            placeholder="Email"
          />
        </div>
        <div>
          <textarea
            name="message"
            rows={10}
            id="message"
            className={styles.formControl}
            placeholder="Повідомлення"
          />
        </div>
        <input type="submit" className={styles.submit} value="Надіслати" />
      </form>
    </Col>
  )
}

export default ContactForm
