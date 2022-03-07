import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavB } from '../styles/StyledNav';

const Barra = () => {
  return (
    <NavB collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646189827/sprint3/logo_vnf1fd.svg" alt="" /></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <div>
          <Nav className="me-auto">
            <Nav.Link href="#deets">Features</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Team
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign in
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </NavB>
  )
}

export default Barra;
