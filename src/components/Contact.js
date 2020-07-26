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
          <NavLink href='https://www.linkedin.com/in/michelle-frattaroli-2502231a2/'>
            <Image src={linkedinImg} className='media-img-sm'/>
            LinkedIn
          </NavLink>
      </Row>
      <Row className='justify-content-center'>
        <NavLink href='https://github.com/mishyjari'>
          <Image src={githubImg} className='media-img-sm'/>
          GitHub
        </NavLink>
      </Row>
      <Row className='justify-content-center'>
        <NavLink href='https://twitter.com/MishyJari'>
          <Image src={twitterImg} className='media-img-sm'/>
          Twitter
        </NavLink>
      </Row>
      <Row className='justify-content-center'>
        <Col sm={4} align='center'>
          <h3>Contact Michelle via Email</h3>
          <EmailForm />
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;
