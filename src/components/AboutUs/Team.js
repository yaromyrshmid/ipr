import React from "react"
import { Row, Col } from "react-bootstrap"

import TeamMember from "./TeamMember"

const Team = ({ teamMembers }) => {
  const team = {}
  teamMembers.forEach(({ node }) => {
    team[node.department] = []
  })
  teamMembers.forEach(({ node }) => {
    node.head
      ? team[node.department].unshift(node)
      : team[node.department].push(node)
  })
  const teamData = Object.keys(team).map(key => {
    if (key !== "Без відділу") {
      return (
        <div key={key}>
          {key !== "Без відділу" && <h4>{key}</h4>}
          {team[key][0].head && (
            <Row>
              <Col xs={12} lg={6}>
                <TeamMember node={team[key].shift()} />
              </Col>
            </Row>
          )}
          <Row>
            {team[key].map(item => {
              return (
                <Col xs={12} lg={6} key={item.contentful_id}>
                  <TeamMember node={item} />
                </Col>
              )
            })}
          </Row>
        </div>
      )
    }
    return null
  })

  return (
    <>
      <div>
        {team["Без відділу"][0].head && (
          <Row>
            <Col xs={12} lg={6}>
              <TeamMember node={team["Без відділу"].shift()} />
            </Col>
          </Row>
        )}
        <Row>
          {team["Без відділу"].map(item => {
            return (
              <Col xs={12} lg={6} key={item.contentful_id}>
                <TeamMember node={item} />
              </Col>
            )
          })}
        </Row>
      </div>
      {teamData}
    </>
  )
}

export default Team
