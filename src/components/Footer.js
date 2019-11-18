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
        {/* &copy; ЛКП "Інститут просторового розвитку" {new Date().getFullYear()}.
        Усі права захищено.
        <br /> */}
        &copy; Уся інформація, розміщена на цьому веб-сайті виключно з метою
        презентації структури контенту та не може вважатись правдивою.
        <br />
        Розробник:
        <a
          href="https://www.linkedin.com/in/yaromyr-shmid-2a468398/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Яромир Шмід
        </a>
      </div>
    </footer>
  )
}

export default Footer
