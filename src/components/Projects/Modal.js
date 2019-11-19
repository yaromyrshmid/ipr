import React from "react"
import Modal from "react-responsive-modal"
import Image from "gatsby-image"
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi"

import styles from "../../css/gallery.module.css"

const ModalExport = props => {
  return (
    <Modal
      styles={{
        modal: {
          maxWidth: "1200px",
        },
      }}
      open={props.showModal}
      closeIconSize={0.1}
      onClose={props.closeModal}
      onOverlayClick={props.closeModal}
      blockScroll={false}
    >
      <div className={styles.modalImageContainer} onClick={props.closeModal}>
        {props.fluid && (
          <Image
            fluid={props.fluid}
            alt="project image"
            className={styles.image}
          />
        )}
      </div>
      {props.showLeftControl && (
        <span
          onClick={() => props.prevImage()}
          className={`${styles.arrowContainer} ${styles.arrowLeft}`}
        >
          <FiArrowLeftCircle className={styles.arrow} />
        </span>
      )}
      {props.showRightControl && (
        <span
          onClick={props.nextImage}
          className={`${styles.arrowContainer} ${styles.arrowRight}`}
        >
          <FiArrowRightCircle className={styles.arrow} />
        </span>
      )}
    </Modal>
  )
}

export default ModalExport
