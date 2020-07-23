import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import './App.css';

function App() {
  return (
    <Container className="App">
      <Row id='header-container'>
        <h1 id='header-main'>mishyJari</h1>
        <h4 id='header-sub'>Software Development portfolio for Michelle Frattaroli</h4>
      </Row>
      <Router>
        <Row id='navbar'>
          <NavLink
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            to='/portfolio'
          >
            Portfolio
          </NavLink>
          <NavLink
            to='/contact'
          >
            Contact
          </NavLink>
        </Row>
        <Row id='content-main'>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Row>
        <Row id='footer'>
          <a href='https://www.linkedin.com/in/michelle-frattaroli-2502231a2/'>LinkedIn</a>
          <a href='https://www.github.com/mishyjari'>GitHub</a>
        </Row>
      </Router>
    </Container>
  );
}

export default App;
