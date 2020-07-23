import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import ProjectPreview from './ProjectPreview.js';
import ProjectShow from './ProjectShow.js';

class Portfolio extends React.Component {

  state = {
    projects: []
  }

  getProjectById = id => {
    return this.state.projects.find(p => p.id === Number(id))
  }

  componentDidMount() {
    // Fetch project instances once API is set up
    // Static data for development
    this.setState({
      projects: [
        {
          title: 'The Board',
          description: 'A dispatching application for managing courier deliveries.',
          id: 1
        },
        {
          title: 'Punchr',
          description: 'A time clock application for managing employee shifts.',
          id: 2
        },
        {
          title: 'ArrowJournal',
          description: 'A digital journal based loosely on the Bullet Journal designed to track events and tasks.',
          id: 3
        },
        {
          title: 'Schmeddit',
          description: 'A Reddit clone featuring categories, up/down votes on posts, and threaded replies.',
          id: 4
        }
      ]
    }, () => console.log("Projects Set in State", this.state.projects))
  }
  render() {
    return (
      <Row>
        <Col>
          <Route exact path='/portfolio'>
            {
              this.state.projects.map(project => {
                return (
                  <ProjectPreview project={project} />
                )
              })
            }
          </Route>
          <Route exact path='/portfolio/:id' render={routerProps => {
            return <ProjectShow project={this.getProjectById(routerProps.match.params.id)} />
          }} />
        </Col>
      </Row>
    )
  }
}

export default Portfolio;
