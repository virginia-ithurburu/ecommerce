import Container  from "react-bootstrap/Container"
import { NavLink } from "react-router-dom"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import CartWidget from "../Widget/CartWidget"


function NavBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid >
          <NavLink to='/'>
          <img src="https://www.overclockersclub.com/siteimages/news/news36221_12989-cd_projekt_red_unveils_new_logos_for_the_studio_and_the_witcher_3.png" width="70" alt="logo" className="d-inline-block align-top px-2" />
          </NavLink>
          <Navbar.Brand>CD Projekt Red</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="navbarCollapse">
            <Nav className="me-auto" style={{padding:'1%',}}>
                <NavLink style={{textDecoration: 'none', color:'white', display:'flex', alignItems:'center', padding:'10px'}} to='/' className='home'>Home</NavLink>
                <NavDropdown title="Products" id="collasible-nav-dropdown" to='' style={{padding:'7px'}}>
                  <NavLink style={{textDecoration: 'none', color:'black', padding:'10px', display:'grid'}} to='category/female' className='clothesFemale'>Clothes Female</NavLink>
                  <NavLink style={{textDecoration: 'none', color:'black', padding:'10px'}} to='category/male' className='clothesMale'>Clothes Male</NavLink>
                  <NavDropdown.Divider />
                  <NavLink style={{textDecoration: 'none', color:'black', padding:'10px'}} to='category/objects' className='accesories'>Accessories</NavLink>
                </NavDropdown>
            </Nav>
            <Nav>
                <NavLink to='/cart'  className={({ isActive })=> isActive ? 'active' : ''} >
                  <CartWidget />
                </NavLink>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar