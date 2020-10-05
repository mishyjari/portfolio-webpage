import React from 'react';
import { Col, Row, Card, Image } from 'react-bootstrap';
import profileImage from '../resources/profileImage.jpg';

const About = () => {
    return (
        <Row>
        <Col lg='8'>
          <Card bg='dark' text='light'>
            <Card.Header as={'h4'}>Biography</Card.Header>
            <Card.Body>
              <Card.Text className='text-left'>
                <Image
                  src={profileImage}
                  style={{maxWidth: '40%', float: 'right', margin: '10px'}} />
                <p>
                  Welcome to the professional software development portfolio for <strong>Michelle Frattaroli</strong>. After art school, Michelle spent most of her twenties in the courier industry. Starting as a bike messenger, she quickly expanded her capacities to include dispatching, client relations, billing, and employee management. She also spent a year serving as president of the Boston Bicycle Messenger Association, a local non-profit which serves as a resource of support and community engagement for Boston’s bike messengers. There, in addition to running the monthly meetings, she brought the messenger community together and organized food drives, community retreats, and group volunteering opportunities. With her expertise in logistics and management, she worked with a small team to renovate and reopen a dilapidated Italian restaurant in a suburb north of Boston. She was responsible for acquiring and maintaining permits and licensing, hiring, training and scheduling staff, tracking and ordering inventory, and managing the restaurant on a daily basis.
                </p>
                <p>
                  Michelle has always had a keen interest in working with computers, so in 2019, she decided to turn her hobby professional and act on her growing desire to work in tech. Choosing Javascript as a starting point, she soon found herself spending all of her free time on sites such as Codecademy and freeCodeCamp learning new concepts and practicing what she was learning through code challenges and building small projects as exercises. By the beginning of 2020, her desire to learn and grow as a developer reached the point that she began looking into ways she could focus on nothing but code. She decided on Flatiron School’s immersive software engineering boot camp in New York City and enrolled in a cohort starting in March.
                </p>
                <p>
                  The outbreak of COVID meant that Flatiron’s on-campus program would be taught remotely. Flatiron managed this transition very effectively, using Zoom and Slack to run daily stand-ups and stand-downs, pair programming, group exercises and discussions, building projects with small teams, code challenges and reviews. Michelle found her excitement for the material growing deeper week by week. Having managed people in the workplace before, she quickly found herself falling into, and feeling confident in, leadership roles among her peers. The program featured a full-stack development oriented curriculum, culminating in a solid understanding of building web applications on a Rails API with a React front-end.
                </p>
                <p>
                  Since graduation, Michelle has been focusing her studies on Python and is actively seeking opportunities for her first professional role as a software engineer. She is passionate about this work, extremely dedicated and quick to develop deep understandings of new technologies and frameworks given a target to focus on. To see some of her work, please visit the portfolio section of this site. If you would like to reach out to Michelle with any questions or feedback, please see the contact section.
                </p>
            </Card.Text>
            </Card.Body>
          </Card>
        </Col>
          <Col>
            <Card bg='secondary' text='light'>
              <Card.Header as={'h4'}>About Michelle</Card.Header>
              <Card.Body>
                <Card.Text className='text-left'>
                  <h6>Education</h6>
                  <ul>
                    <li><strong>Mass. College of Art</strong> - Photography <em>2009-2013</em></li>
                    <li><strong>Flatiron School</strong> - Software Engineering Immersive Boot Camp <em>2020</em></li>
                  </ul>
                  <h6>Programming Languages</h6>
                  <ul>
                    <li>Javascript</li>
                    <li>Ruby</li>
                    <li>Python</li>
                  </ul>
                  <h6>Frameworks, etc.</h6>
                  <ul>
                    <li>React</li>
                    <li>Ruby on Rails</li>
                    <li>SQLite, PosgresSQL, MongoDB</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>HTML, ERB, Jade/Pug</li>
                    <li>CSS, Bootstrap</li>
                  </ul>
                  <h6>Technologies</h6>
                  <ul>
                    <li>Amazon Web Services</li>
                    <li>Linux, MacOS, Windows</li>
                    <li>Git</li>
                    <li>Vim, Atom, VS Code</li>
                    <li>Adobe Photoshop, GIMP</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )
};

export default About;