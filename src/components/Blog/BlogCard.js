import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import { Col } from "react-bootstrap"

import styles from "../../css/blog-card.module.css"

const BlogCard = ({ post }) => {
  const { slug, name, image, author, createdAt } = post
  return (
    <Col md={6}>
      <AniLink fade to={`/blog/${slug}`}>
        <article className={styles.post}>
          <span className={styles.label}>
            <span className={styles.labelText}>{createdAt}</span>
          </span>
          <div className={styles.imgContainer}>
            <Image
              fluid={image.fluid}
              className={styles.img}
              alt="single post"
            />
            <div className={styles.link}>Читати</div>
          </div>
          <div className={styles.footer}>
            <h4>{name}</h4>
            <h6>
              Автор{author.includes(",") && "и"}: {author}
            </h6>
          </div>
        </article>
      </AniLink>
    </Col>
  )
}

export default BlogCard
