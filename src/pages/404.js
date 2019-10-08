import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import styles from "../css/error.module.css"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Сторінки не знайдено">
          <Link to="/" className="btn-white">
            Повернутись на головну
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
