import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight } from "react-icons/fa"
import { Container, Row, Col } from "react-bootstrap"

import styles from "../css/navbar.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/logo.jpg"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <Container>
      <Row>
        <Col>
          <nav className={styles.navCenter}>
            <div className={styles.divCenter}>
              <AniLink fade to="/" className={styles.brandBlock}>
                <img src={logo} alt="logo" className={styles.logo} />
                <h1 className={styles.brandName}>
                  Інститут
                  <br />
                  <span className={styles.brandPrimary}>
                    просторового розвитку
                  </span>
                </h1>
              </AniLink>
              <button
                type="button"
                className={styles.logoBtn}
                onClick={toggleNav}
              >
                <FaAlignRight className={styles.logoIcon} />
              </button>
            </div>
            <ul
              className={
                isOpen
                  ? `${styles.navLinks} ${styles.showNav}`
                  : `${styles.navLinks}`
              }
            >
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <AniLink fade to={item.path}>
                      {item.text}
                    </AniLink>
                  </li>
                )
              })}
            </ul>
            <div className={styles.navSocialLinks}>
              {socialIcons.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </a>
                )
              })}
            </div>
          </nav>
        </Col>
      </Row>
    </Container>
  )
}

export default Navbar
