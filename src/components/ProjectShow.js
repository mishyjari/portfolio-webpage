import React from 'react';
import { Row, Col, Container, Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ProjectShow = props => {

  const { project } = props;

  return (
    <Container style={{
        border: '1px solid #aaa',
        background: "#eee",
        borderRadius: '2rem',
        padding: '20px'
      }}>

        <h2 id='project-title'>{project ? project.title : null}</h2>

        <h6><strong>{project ? project.shortDescription : null}</strong></h6>

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
            <p style={{
                fontSize: '1.2rem',
                border: '1px solid #aaa',
                borderRadius: '2rem',
                padding: '20px',
                background: "#ddd"
              }}>{project ? project.longDescription : null}</p>
          </Col>
        </Row>


    </Container>
  )
}

export default ProjectShow;
