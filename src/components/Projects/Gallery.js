import React, { useState } from "react"
import { Row, Col } from "react-bootstrap"

import Modal from "./Modal"
import ImageWithZoom from "./ImageWithZoom"
import styles from "../../css/gallery.module.css"

const Gallery = props => {
  const [showModal, setShowModal] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = index => {
    setActiveImage(index)
    setShowModal(true)
  }

  const prevImage = () => {
    if (activeImage > 0) {
      setActiveImage(activeImage => activeImage - 1)
    }
  }

  const nextImage = () => {
    if (activeImage < props.projectImages.length - 1) {
      setActiveImage(activeImage => activeImage + 1)
    }
  }

  return (
    <>
      {props.projectImages.length > 0 && (
        <Row className={styles.gallery}>
          <Col xs={12}>
            <h3>Галерея:</h3>
          </Col>

          {props.projectImages.map((item, index) => {
            return (
              <ImageWithZoom
                key={index}
                fluid={item.fluid}
                openModal={openModal}
                index={index}
              />
            )
          })}
          <Modal
            showModal={showModal}
            fluid={props.projectImages[activeImage].fluid}
            closeModal={closeModal}
            prevImage={prevImage}
            nextImage={nextImage}
            showLeftControl={activeImage === 0 ? false : true}
            showRightControl={
              activeImage === props.projectImages.length - 1 ? false : true
            }
          />
        </Row>
      )}
    </>
  )
}

export default Gallery
