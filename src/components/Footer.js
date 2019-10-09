import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink key={index} fade to={item.path}>
              {item.text}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
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
      <div className={styles.copyright}>
        &copy; ЛКП "Інститут просторового розвитку" {new Date().getFullYear()}.
        Усі права захищено.
      </div>
    </footer>
  )
}

export default Footer
