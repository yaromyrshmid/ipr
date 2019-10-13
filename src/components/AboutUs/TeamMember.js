import React from "react"
import Image from "gatsby-image"

import styles from "../../css/teamMember.module.css"

const TeamMember = props => {
  console.log(props.node.image.fluid)

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image
          fluid={props.node.image.fluid}
          alt={`${props.node.name} photo`}
        />
      </div>
      <h4>{props.node.name}</h4>
    </div>
  )
}

export default TeamMember
