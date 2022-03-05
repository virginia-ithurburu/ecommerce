import Container  from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import CartWidget from "../Widget/CartWidget"


function NavBar() {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <img src="https://www.overclockersclub.com/siteimages/news/news36221_12989-cd_projekt_red_unveils_new_logos_for_the_studio_and_the_witcher_3.png" width="70"  className="d-inline-block align-top px-2" />
      <Navbar.Brand href="#home">CD Projekt Red</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About Us</Nav.Link>
          <NavDropdown title="Products" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Accessories</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Entertainment</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Games and more</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          
          <Nav.Link eventKey={2} href="#memes">
            <CartWidget />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar