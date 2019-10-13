import React, { Component } from "react"
import { Container, Row } from "react-bootstrap"

import styles from "../../css/items.module.css"
import Project from "./Project"
import Title from "../Title"

export default class ProjectList extends Component {
  state = {
    projects: [],
    sortedProjects: [],
  }

  componentDidMount() {
    this.setState({
      projects: this.props.projects.edges,
      sortedProjects: this.props.projects.edges,
    })
  }
  render() {
    return (
      <section className={styles.projects}>
        <Title title="Наші" subtitle="проекти" />
        <Container className={styles.center}>
          <Row>
            {this.state.sortedProjects.map(({ node }) => {
              return <Project key={node.contentful_id} project={node} />
            })}
          </Row>
        </Container>
      </section>
    )
  }
}
