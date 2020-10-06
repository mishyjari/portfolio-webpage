import React from 'react';
import EmailForm from './EmailForm.js';

import { Container, Row, Col, Image, NavLink } from 'react-bootstrap'

import linkedinImg from '../resources/linkedin.png';
import githubImg from '../resources/github.png';
import twitterImg from '../resources/twitter.png';

const Contact = () => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col sm={4} align='center'>
          <EmailForm />
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;
