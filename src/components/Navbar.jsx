import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavbarPizza() {
  return (
    <Navbar expand="lg" className="bg-success">
      <Container>
        <Navbar.Brand href="#home" className="text-white">¡Pizzeria Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white-50">Home</Nav.Link>
            <Nav.Link href="#profile" className="text-white-50">Profile</Nav.Link>
            <Nav.Link href="#login" className="text-white-50">Login</Nav.Link>
            <Nav.Link href="#logout" className="text-white-50">Logout</Nav.Link>
            <Nav.Link href="#register" className="text-white-50">Register</Nav.Link>
            <Nav.Link href="#total" className="text-white-50">Total: $</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPizza;