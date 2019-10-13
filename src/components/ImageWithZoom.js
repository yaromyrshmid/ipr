import React, { useState } from "react"
import Image from "gatsby-image"

import Modal from "react-responsive-modal"

import styles from "../css/imageWithZoom.module.css"

const ImageWithZoom = props => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(showModal => !showModal)
  }

  return (
    <div onClick={toggleModal}>
      <Image fluid={props.fluid} alt="project image" className={styles.image} />
      <Modal
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
      </Modal>
    </div>
  )
}

export default ImageWithZoom
