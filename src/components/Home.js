import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Row>
    <Col>
      <Card>
        <Card.Header>About Michelle</Card.Header>
        <Card.Body>
          <Card.Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
      <Col>
        <Card>
          <Card.Header>Technical Overview</Card.Header>
          <Card.Body>
            <Card.Text>
              <ul>
                <li>Education (Flatiron)</li>
                <li>Tech stacks and technologies</li>
                <li>Projects</li>
                <li>Currently Building</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Writing</Card.Header>
          <Card.Body>
            <Card.Text>
              <p>Something something</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Home;
