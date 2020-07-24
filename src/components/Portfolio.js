import React from 'react';
import { Row, Col, Card, CardDeck } from 'react-bootstrap';
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
          shortDescription: 'A dispatching application for managing courier deliveries.',
          longDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          id: 1,
          imgUrl: "https://www.pets4homes.co.uk/images/articles/2659/large/9-great-ways-to-raise-a-happy-health-kitten-54f1c5f2a4368.jpg",
          github: 'https://www.github.com/mishyjari',
          videoDemo: 'http://www.youtube.com',
          liveDemo: null

        },
        {
          title: 'Punchr',
          shortDescription: 'A time clock application for managing employee shifts.',
          longDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          id: 2,
          imgUrl: "https://www.pets4homes.co.uk/images/articles/2659/large/9-great-ways-to-raise-a-happy-health-kitten-54f1c5f2a4368.jpg",
          github: 'https://www.github.com/mishyjari',
          videoDemo: 'http://www.youtube.com',
          liveDemo: null
        },
        {
          title: 'ArrowJournal',
          shortDescription: 'A digital journal based loosely on the Bullet Journal designed to track events and tasks.',
          longDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          id: 3,
          imgUrl: "https://www.pets4homes.co.uk/images/articles/2659/large/9-great-ways-to-raise-a-happy-health-kitten-54f1c5f2a4368.jpg",
          github: 'https://www.github.com/mishyjari',
          videoDemo: 'http://www.youtube.com',
          liveDemo: null
        },
        {
          title: 'Schmeddit',
          shortDescription: 'A Reddit clone featuring categories, up/down votes on posts, and threaded replies.',
          longDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          id: 4,
          imgUrl: "https://www.pets4homes.co.uk/images/articles/2659/large/9-great-ways-to-raise-a-happy-health-kitten-54f1c5f2a4368.jpg",
          github: 'https://www.github.com/mishyjari',
          videoDemo: 'http://www.youtube.com',
          liveDemo: null
        }
      ]
    })
  }
  render() {
    return (
      <Row>
        <Col>
          <Route exact path='/portfolio'>
            <CardDeck>
            {
              this.state.projects.map(project => {
                return (
                  <ProjectPreview project={project} />
                )
              })
            }
            </CardDeck>
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
