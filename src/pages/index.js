import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Діяльність"
        info="Проектування вулиць, доріг, громадських просторів, парків, об’єктів житлового та господарського призначення."
      >
        <Link to="/projects" className="btn-white">
          Проекти
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
