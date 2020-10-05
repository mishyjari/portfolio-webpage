import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import { Container, Col, Row, Nav, Navbar, Link} from 'react-bootstrap';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';
import './bootstrap.min.css';
import './App.css';

function App() {

  return (
    <Container className="App">
      <Router>

      <Navbar sticky='top' bg='dark' expand='lg'>

        <h1 style={{
            paddingTop: '10px',
            fontFamily: 'courier',
            color: '#fff',
            fontSize: '1.2rem'
          }}>
          mishyJari || Michelle Frattaroli
        </h1>

        <Nav className='mr-auto'>

        </Nav>
        <Nav className='nav-main'>
          <ul className='nav nav-tabs' role='tablist'>
            <li className='nav-item'>
              <NavLink
                to='/'
                className='nav-link'
                data-toggle='tab'
                role='tab'
                aria-controls='home'
                selected={false}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/portfolio'
                className='nav-link'
                data-toggle='tab'
                role='tab'
                aria-controls='portfolio'
                selected={false}
              >
                Portfolio
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                className='nav-link'
                data-toggle='tab'
                role='tab'
                aria-controls='about'
                selected={false}
              >
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/contact'
                className='nav-link'
                data-toggle='tab'
                role='tab'
                aria-controls='contact'
                selected={false}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </Nav>

      </Navbar>

        <Row id='content-main'>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
        </Row>
      </Router>
    </Container>
  );
}

export default App;
