import React, { useContext } from 'react';
import { Row, Col, Card, Image, Container, Accordion, Button, useAccordionToggle, AccordionContext } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Document, Page, pdfjs } from 'react-pdf';

import resume from '../resources/resume.pdf';
import profileImage from '../resources/profileImage.jpg';
import jsLogo from '../resources/dev-logos/javascript.png';
import reactLogo from '../resources/dev-logos/react.png';
import awsLogo from '../resources/dev-logos/aws.png';
import gitLogo from '../resources/dev-logos/git.png';
import mongoLogo from '../resources/dev-logos/mongodb.png';
import nodeLogo from '../resources/dev-logos/nodejs.png';
import postgresLogo from '../resources/dev-logos/postgresql.png';
import railsLogo from '../resources/dev-logos/rails.png';
import rubyLogo from '../resources/dev-logos/ruby.png';
import pythonLogo from '../resources/dev-logos/python.png';

// Context-aware toggle for resume dropdown
function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    return callback && callback(eventKey)
  });
  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Button
      type='button'
      onClick={decoratedOnClick}
      variant={isCurrentEventKey ? 'outline-info' : 'info'}
    >
      {isCurrentEventKey ? 'Collapse' : children}
    </Button>
  );
};

const About = () => {

    // Set global worker for pdf component
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
    <Container>
      <Row className='justify-content-center'>
        <Col xl='auto' lg='auto'>
          <Card bg='light' text='dark'>
            <Card.Body>
              
              <Row>
                <Col sm='auto'>
                  <Row className='blockquote justify-content-center' fluid style={{
                    fontFamily: 'courier',
                    fontSize: "1.5rem",
                    marginBottom: '5px'
                   }}>
                    Full-Stack Software Engineer<br />
                  </Row>
                  <Row className='blockquote justify-content-center' fluid style={{
                    fontFamily: 'courier',
                    fontSize: "1.2rem",
                   }}>
                    Cambridge, MA
                  </Row>

                  <Container className='justify-content-center' style={{
                    fontFamily: 'arial'
                  }}>
                    <Row>
                      <Col md={6}>
                        <strong>Need a website built?</strong><br /> I can do that! <br />
                      </Col>
                    </Row>

                    <Row>
                      <Col 
                        sm={10}
                        md={{span:6, offset: 2}}
                      >
                        <strong>Want to hire me?</strong> <br /><a href='https://www.linkedin.com/in/michelle-frattaroli-2502231a2/'>I'm on the market!</a><br />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={{span: 8, offset: 4}}>
                        <strong>Like to send me feedback?</strong><br /> It's always welcome! <br />
                      </Col>
                    </Row>

                    <Row fluid className='justify-content-center' style={{
                      padding: '10px',
                    }}>
                    <em>You can use the <Link to='./contact'>email form on my contact page</Link> and I'll get right back to you!</em>
                    </Row>
                    
                  </Container>

                </Col>
                <Col>
                  <Row className='justify-content-center' style={{
                      width: 'auto',
                      opacity: '.9'
                    }}>
                    <Image src={profileImage} rounded style={{
                      maxWidth: '300px'
                    }} />
                  </Row>
                </Col>
              </Row>
              <Row fluid className='justify-content-center dev-logo-container'>
                  <Image src={jsLogo} className='media-img-sm' />
                  <Image src={rubyLogo} className='media-img-sm' />
                  <Image src={pythonLogo} className='media-img-sm' />
                  <Image src={reactLogo} className='media-img-sm' />
                  <Image src={railsLogo} className='media-img-sm' />
                  <Image src={nodeLogo} className='media-img-sm' />
                  <Image src={awsLogo} className='media-img-sm' />
                  <Image src={mongoLogo} className='media-img-sm' />
                  <Image src={postgresLogo} className='media-img-sm' />
                  <Image src={gitLogo} className='media-img-sm' />
                </Row>

            </Card.Body>
            <Accordion>
                
              <Card.Header>
                <ContextAwareToggle eventKey='0'>View Resume</ContextAwareToggle>
              </Card.Header>

              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                  <a href={resume} download>Click to download PDF</a>
                  <Document file={resume}>
                    <Page pageNumber={1} scale={1.5}/>
                  </Document>
                </Card.Body>
              </Accordion.Collapse>

            </Accordion>
          </Card>
        </Col>
      </Row>
      </Container>
    )
};
 
export default About;