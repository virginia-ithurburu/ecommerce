import Container  from "react-bootstrap/Container"
import { NavLink } from "react-router-dom"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import CartWidget from "../Widget/CartWidget"


function NavBar() {
  return (
    

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid >
      <NavLink to='/'>
      <img src="https://www.overclockersclub.com/siteimages/news/news36221_12989-cd_projekt_red_unveils_new_logos_for_the_studio_and_the_witcher_3.png" width="70"  className="d-inline-block align-top px-2" />
      </NavLink>
      <Navbar.Brand>CD Projekt Red</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link><NavLink style={{textDecoration: 'none', color:'white'}} to='/'>Home</NavLink></Nav.Link>
          <NavLink style={{textDecoration: 'none'}} to='/'><Nav.Link>About Us</Nav.Link></NavLink>
          <NavDropdown title="Products" id="collasible-nav-dropdown">
          <NavDropdown.Item><NavLink style={{textDecoration: 'none', color:'black'}} to='category/female'>Clothes Female</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink style={{textDecoration: 'none', color:'black'}} to='category/male'>Clothes Male</NavLink></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item><NavLink style={{textDecoration: 'none', color:'black'}} to='category/objects'>Accessories</NavLink></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavLink to='cart'  className={({ isActive })=> isActive ? 'active' : ''} >
            <CartWidget />
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>



  )
}

export default NavBar