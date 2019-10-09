import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import styles from "../css/error.module.css"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Сторінки не знайдено">
          <AniLink fade to="/" className="btn-white">
            Повернутись на головну
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
