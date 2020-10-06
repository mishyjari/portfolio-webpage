import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectPreview = props => {

  const { title, shortDescription, id, imgUrl } = props.project;

  return (
    <Card className='card-link'  as={Link} to={`/portfolio/${id}`}>
      <Card.Header as={'h3'}>{title}</Card.Header>
      <Card.Img src={imgUrl} style={{width: '100%'}}/>
      <Card.Body>
        <Card.Text>{shortDescription}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProjectPreview;
