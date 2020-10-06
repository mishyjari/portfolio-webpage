import React from 'react';
import EmailForm from './EmailForm.js';

import { Container, Row, Col } from 'react-bootstrap'

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
