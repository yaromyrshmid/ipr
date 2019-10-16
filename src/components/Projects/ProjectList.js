import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"

import styles from "../../css/items.module.css"
import Project from "./Project"
import Title from "../Title"

export default class ProjectList extends Component {
  state = {
    projects: [],
    sortedProjects: [],
    active: null,
  }

  componentDidMount() {
    this.setState({
      projects: this.props.projects.edges,
      sortedProjects: this.props.projects.edges,
    })
  }

  handleFilterProjects = category => {
    const sortedProjects = this.state.projects.filter(
      project => project.node.category === category
    )
    this.setState({
      sortedProjects: sortedProjects,
      active: category,
    })
  }

  handleResetFilter = () => {
    this.setState({
      sortedProjects: this.state.projects,
      active: null,
    })
  }

  render() {
    return (
      <section className={styles.projects}>
        <Title title="Наші" subtitle="проекти" />
        <Container className={styles.center}>
          <Row>
            <Col
              onClick={this.handleResetFilter}
              className={this.state.active ? "btn-primary" : "btn-active"}
            >
              усі проекти
            </Col>
            <Col
              onClick={() => this.handleFilterProjects("громадські простори")}
              className={
                this.state.active === "громадські простори"
                  ? "btn-active"
                  : "btn-primary"
              }
            >
              громадські простори
            </Col>
            <Col
              onClick={() => this.handleFilterProjects("вулиці")}
              className={
                this.state.active === "вулиці" ? "btn-active" : "btn-primary"
              }
            >
              вулиці
            </Col>
            <Col
              onClick={() => this.handleFilterProjects("інфраструктура")}
              className={
                this.state.active === "інфраструктура"
                  ? "btn-active"
                  : "btn-primary"
              }
            >
              інфраструктура
            </Col>
          </Row>
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
