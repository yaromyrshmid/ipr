import React, { useState, useEffect } from "react"
import Modal from "react-responsive-modal"
import Image from "gatsby-image"

import styles from "../css/imageWithZoom.module.css"

const ModalExport = props => {
  // const [fluid, setFluid] = useState(null)
  // useEffect(() => {
  //   setFluid(props.fluid)
  // }, props)

  return (
    <Modal
      styles={{
        modal: {
          maxWidth: "1200px",
        },
      }}
      open={props.showModal}
      closeIconSize={0.1}
      onClose={props.toggleModal}
      onOverlayClick={props.toggleModal}
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
  )
}

export default ModalExport
