import React from "react"

import styles from "../css/banner.module.css"

const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <h4>{info}</h4>
      {children}
    </div>
  )
}

export default Banner
