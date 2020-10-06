import React from 'react';
import { Row, Col, Card, Image, Container, Accordion, Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../resources/resume.pdf';
import profileImage from '../resources/profileImage.jpg';


const About = () => {

    
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    

    return (
    <Container>
      <Row className = 'justify-content-center'>
        <Col md={10}>
          <Card bg='light' text='dark'>
            <Card.Body>
              
              <Row>
                <Col>
                  <Image src={profileImage} rounded />
                </Col>
                <Col>
                  I'm Michelle. I build software and make things go beep boop bap. I'm really gay and and do dumb things with bikes and fire.
                </Col>
                <Col>
                  // Maybe logos for various frameworks and languages? Something quasi technical?
                </Col>
              </Row>

            </Card.Body>
            <Accordion>
                
              <Card.Header>
                <Accordion.Toggle eventKey='0' as={Button} variant={'info'}>
                  View Resume
                </Accordion.Toggle>
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