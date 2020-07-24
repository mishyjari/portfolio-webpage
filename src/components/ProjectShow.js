import React from 'react';
import { Row, Col, Container, Nav } from 'react-bootstrap'

const ProjectShow = props => {

  const { project } = props;

  return (
    <Container>

        <h2 id='project-title'>{project ? project.title : null}</h2>

        <strong>{project ? project.shortDescription : null}</strong>

        <Row as={Nav} className='justify-content-center'>
          <Nav.Item>
            <Nav.Link href={project ? project.github : null} disabled={project && project.github ? false : true}>
              GitHub
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={project ? project.liveDemo : null} disabled={project && project.liveDemo ? false : true}>
              Live Demo
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={project ? project.videoDemo : null} disabled={project && project.videoDemo ? false : true}>
              Video Demo
            </Nav.Link>
          </Nav.Item>
        </Row>

        <Row>
          <Col sm={5}>
            <img src={project ? project.imgUrl : null} style={{maxWidth: '90%'}} />
          </Col>
          <Col>
            <p>{project ? project.longDescription : null}</p>
          </Col>
        </Row>


    </Container>
  )
}

export default ProjectShow;
