import React from "react"

import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="Про" subtitle="нас" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about us image" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Більше про нас</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eos!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur accusamus deleniti assumenda.
          </p>
          <button type="button" className="btn-primary">
            Дізнатись більше
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
