import React, { useState } from "react"
import Image from "gatsby-image"

// import Modal from "react-responsive-modal"

import Modal from "../Modal"
import styles from "../../css/imageWithZoom.module.css"
import { Col } from "react-bootstrap"

const ImageWithZoom = props => {
  const [showModal, setShowModal] = useState(false)
  const [image, setImage] = useState(null)

  const toggleModal = (image = null) => {
    setImage(image)
    setShowModal(showModal => !showModal)
  }

  // const closeModal = () => {

  // }

  return (
    <Col
      onClick={() => toggleModal(props.fluid)}
      xs={12}
      md={6}
      className={styles.galleryImage}
    >
      <Image fluid={props.fluid} alt="project image" className={styles.image} />
      <Modal showModal={showModal} fluid={image} toggleModal={toggleModal} />
      {/* <Modal
        styles={{
          modal: {
            maxWidth: "1200px",
          },
        }}
        open={showModal}
        closeIconSize={0.1}
        onClose={toggleModal}
        onOverlayClick={toggleModal}
        blockScroll={false}
      >
        <div className={styles.modalImageContainer}>
          <Image
            fluid={props.fluid}
            alt="project image"
            className={styles.image}
          />
        </div>
      </Modal> */}
    </Col>
  )
}

export default ImageWithZoom
