import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Home from './components/Home'; // Create Home.js component with your desired content
import AssignedOrders from './components/AssignedOrders'; // Create AssignedOrders.js component
import SearchOrders from './components/SearchOrders'; // Create SearchOrders.js component
import UpdateOrders from './components/UpdateOrders'; // Create UpdateOrders.js component

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">FAB Foods</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link" end>
                Home
              </NavLink>
              <NavLink to="/contact-admin" className="nav-link">
                Contact Admin
              </NavLink>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assigned-orders" element={<AssignedOrders />} />
          <Route path="/search-orders" element={<SearchOrders />} />
          <Route path="/update-orders" element={<UpdateOrders />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
