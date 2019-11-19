import React from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/layout.css"

const Layout = ({ children }) => {
  if (document) {
    document.cookie = "same-site-cookie=foo; SameSite=Lax"
    document.cookie = "cross-site-cookie=bar; SameSite=None; Secure"
  }
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
