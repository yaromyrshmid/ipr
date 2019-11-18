import React from "react"
import Image from "gatsby-image"
import { Col } from "react-bootstrap"

import styles from "../../css/gallery.module.css"

const ImageWithZoom = props => {
  return (
    <Col
      onClick={() => props.openModal(props.index)}
      xs={12}
      md={6}
      className={styles.galleryImage}
    >
      <Image fluid={props.fluid} alt="project image" className={styles.image} />
    </Col>
  )
}

export default ImageWithZoom
