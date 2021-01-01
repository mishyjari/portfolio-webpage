import React from 'react';
import { Row, Col, CardDeck } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import ProjectPreview from './ProjectPreview.js';
import ProjectShow from './ProjectShow.js';

import projects from '../resources/portfolioData.js';
class Portfolio extends React.Component {
  state = {
    projects: [],
  };

  getProjectById = id => {
    return this.state.projects.find(p => p.id === Number(id));
  };

  componentDidMount() {
    this.setState({ projects: projects[0].projects });
  }

  render() {
    return (
      <Row>
        <Col>
          <Route exact path='/portfolio'>
            <CardDeck>
              {this.state.projects.map(project => {
                return <ProjectPreview project={project} />;
              })}
            </CardDeck>
          </Route>
          <Route
            exact
            path='/portfolio/:id'
            render={routerProps => {
              return (
                <ProjectShow
                  project={this.getProjectById(routerProps.match.params.id)}
                />
              );
            }}
          />
        </Col>
      </Row>
    );
  }
}

export default Portfolio;
