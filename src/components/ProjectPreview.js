import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectShow from './ProjectShow.js';

const ProjectPreview = props => {

  const { title, description, id } = props.project;

  return (
    <Card>
      <Card.Header as={'h5'}>{title}</Card.Header>
      <Card.Body>
        <Card.Title as={Link} to={`/portfolio/${id}`}>Details</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProjectPreview;
