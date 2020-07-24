import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Container, Col, Row, Nav, Navbar, Link} from 'react-bootstrap';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import './bootstrap.min.css';
import './App.css';

function App() {

  return (
    <Container className="App">
      <Router>

      <Navbar sticky='top' bg='dark' variant='dark' expand='lg'>

        <Navbar.Brand style={{fontFamily: 'courier'}}>
          mishyJari || Michelle Frattaroli
        </Navbar.Brand>

        <Nav className='mr-auto'>

        </Nav>
        <Nav style={{color: '#fff'}}>
          <Nav.Link>
            <NavLink to='/' >
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link href='#projects'>
            <NavLink to='/portfolio'>
              Portfolio
            </NavLink>
          </Nav.Link>
          <Nav.Link href='#contact'>
            <NavLink to='/contact'>
              Contact
            </NavLink>
          </Nav.Link>
        </Nav>

      </Navbar>





        <Row id='content-main'>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Row>
        <Row id='footer' className='text-left'>
          <ul>
            <li><a href='https://www.linkedin.com/in/michelle-frattaroli-2502231a2/'>Linked In</a></li>
            <li><a href='https://www.github.com/mishyjari'>GitHub</a></li>
          </ul>
        </Row>
      </Router>
    </Container>
  );
}

export default App;
