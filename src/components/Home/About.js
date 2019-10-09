import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Title from "../Title"
import styles from "../../css/about.module.css"

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)

  return (
    <section className={styles.about}>
      <Title title="Про" subtitle="нас" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="about us image"
            />
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
