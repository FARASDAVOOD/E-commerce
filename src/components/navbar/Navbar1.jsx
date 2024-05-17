import React, { useContext } from 'react';
import "./Navbar1.css";
import HomeLogo from "../../assets/home_logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { mainContext } from '../../pages/context/ContextApi';



function Navbar1() {
  const navigation = useNavigate()
  const [registerValue,setRegisterValue,Users,setUsers,cart,setCart]=useContext(mainContext);
  return (
    <div>
      <Navbar expand="lg" style={{ position: "fixed", top: "0px", width: "100%", zIndex: "2", border: 'none', boxShadow: "none" }}>
        <Container fluid>
          <Navbar.Brand href="#"><img src={HomeLogo} alt="" /></Navbar.Brand>
          <Navbar.Toggle style={{ background: '#f58773', position: "absolute", right: "70px", top: "12px" }} aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 mx-12 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='mx-3' id="link" onClick={() => navigation('/')}>Home</Nav.Link>
              <Nav.Link className='mx-3' id="link" onClick={() => navigation('/shop')}>Shop</Nav.Link>
              {/* <Nav.Link id="link" href="#action3">About Us</Nav.Link> */}
              <Nav.Link className='mx-3' id="link" onClick={() => navigation('/testimonial')}>Testimonial</Nav.Link>
              <Nav.Link className='mx-3' id="link" onClick={() => navigation('/contact')}>Contact Us</Nav.Link>


            </Nav>
            <Form style={{}} className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{ background: "#f58773", border: "none" }}>Search</Button>
            </Form>
          </Navbar.Collapse>
          <div style={{ display: 'flex', justifyContent: "flex-end" }}>
            <div className='p-2'>
              <span>{cart.length}</span>
              <FontAwesomeIcon style={{ color: "#f58773" }} className='icon1 cursor-pointer' onClick={() => navigation('/cart')} icon={faShoppingCart} />

            </div>

            <div className='p-2  '>
              <FontAwesomeIcon className='icon2 cursor-pointer' style={{ color: "#f58773" }} onClick={() => navigation('/login')} icon={faUser} />
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1;
