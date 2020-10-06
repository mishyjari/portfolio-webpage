import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import { Container, Card, Row, Nav, Navbar, Image} from 'react-bootstrap';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';
import linkedinImg from './resources/linkedin.png';
import githubImg from './resources/github.png';
import twitterImg from './resources/twitter.png'
import './bootstrap.min.css';
import './App.css';

function App() {

  return (
    <Container className="App">
      <Router>

      <Navbar sticky='top' bg='light' expand='lg'>

        <h1 style={{
            paddingTop: '10px',
            fontFamily: 'courier',
            color: '#333',
            fontSize: '1.2rem'
          }}>
          {`mishyJari: {"Michelle Frattaroli": "Full Stack Developer"}`}
        </h1>

        <Nav className='mr-auto'>
        </Nav>
        <Nav className='nav-main'>
          <ul className='nav nav-tabs' >
            <li className='nav-item'>
              <NavLink
                exact to='/'
                className='nav-link'
                selected={false}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/portfolio'
                className='nav-link'
                selected={false}
              >
                Portfolio
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/contact'
                className='nav-link'
                selected={false}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </Nav>

      </Navbar>

        <Row id='content-main'>
          <Route exact path='/' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Row>
      </Router>

      <Row className='justify-content-center'>
        <Card.Footer>
          <a href='https://www.linkedin.com/in/michelle-frattaroli-2502231a2/'>
            <Image src={linkedinImg} className='media-img-sm networking-link'/>
          </a>
          <a href='https://github.com/mishyjari'>
            <Image src={githubImg} className='media-img-sm'/>
          </a>
          <a href='https://twitter.com/MishyJari'>
            <Image src={twitterImg} className='media-img-sm'/>
          </a>
        </Card.Footer>
      </Row>
    </Container>
  );
}

export default App;
