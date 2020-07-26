import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
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

      <Navbar sticky='top' bg='dark' expand='lg'>

        <h1 style={{
            paddingTop: '10px',
            fontFamily: 'courier',
            color: '#fff',
            fontSize: '2rem'
          }}>
          mishyJari || Michelle Frattaroli
        </h1>

        <Nav className='mr-auto'>

        </Nav>
        <Nav className='nav-main'>
          <ul className='nav nav-tabs' role='tablist'>
            <li className='nav-item'>
              <NavLink
                to='/about'
                className='nav-link'
                data-toggle='tab'
                role='tab'
                aria-controls='home'
                selected={true}
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
          <Route exact path='/'>
            <Redirect from='/' to='/about' />
          </Route>
          <Route exact path='/about' component={Home} />
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
