import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="Напишіть" subtitle="нам" />
      <div className={styles.center}>
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
      </div>
    </section>
  )
}

export default Contact
