import React from 'react';
import { Row, Container } from 'react-bootstrap'

const ProjectShow = props => {

  const { project } = props;

  return (
    <Container>
      <Row>
        <h2 id='project-title'>{project ? project.title : null}</h2>
      </Row>
      <Row>
        <p>{project ? project.description : null}</p>
      </Row>
    </Container>
  )
}

export default ProjectShow;
