import React, { useState, useEffect } from "react"
import { Col } from "react-bootstrap"

import styles from "../../css/contact.module.css"

const ContactForm = () => {
  const [formDisabled, setFormDisabled] = useState(true)
  const [nameValid, setNameValid] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [messageValid, setMessageValid] = useState(false)

  useEffect(() => {
    if (nameValid && emailValid && messageValid) {
      setFormDisabled(false)
    } else {
      setFormDisabled(true)
    }
  }, [nameValid, emailValid, messageValid])

  const validateName = event => {
    if (event.target.value.length > 3) {
      setNameValid(true)
    } else {
      setNameValid(false)
    }
  }

  const validateEmail = event => {
    if (
      /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(event.target.value)
    ) {
      setEmailValid(true)
    } else {
      setEmailValid(false)
    }
  }

  const validateMessage = event => {
    if (event.target.value.length > 12) {
      setMessageValid(true)
    } else {
      setMessageValid(false)
    }
  }

  return (
    <Col md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
      <form
        className={styles.form}
        // action="https://formspree.io/a@gmail.com"
        // method="POST"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <div>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.formControl}
            placeholder="Ім'я"
            onChange={validateName}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.formControl}
            placeholder="Email"
            onChange={validateEmail}
          />
        </div>
        <div>
          <textarea
            name="message"
            rows={10}
            id="message"
            className={styles.formControl}
            placeholder="Повідомлення"
            onChange={validateMessage}
          />
        </div>
        {/* <input type="hidden" name="_next" value="http://localhost:8000/" /> */}
        <input
          type="submit"
          className={styles.submit}
          value="Надіслати"
          disabled={formDisabled}
        />
      </form>
    </Col>
  )
}

export default ContactForm
