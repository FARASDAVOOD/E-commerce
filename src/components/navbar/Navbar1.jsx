import React, { useContext } from 'react';
import "./Navbar1.css";
import HomeLogo from "../../assets/home_logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { mainContext } from '../../pages/context/ContextApi';


function Navbar1() {
  const navigate = useNavigate();
  const [
    registerValue,
    setRegisterValue,
    Users,
    setUsers,
    cart,
    setCart,
    logValue,
    setLogValue,
    search,
    setSearch,
    findData,
    setFindData
  ] = useContext(mainContext);

  const handleFind = () => {
    if (search.trim() === "") {
      return; // Do not navigate if the search input is empty
    }

    const lowercaseSearch = search.toLowerCase();
    const foundProducts = products.filter(value =>
      (value.name && value.name.toLowerCase().includes(lowercaseSearch)) ||
      (value.category && value.category.toLowerCase().includes(lowercaseSearch))
    );

    if (foundProducts.length > 0) {
      setFindData(foundProducts);
      navigate("/search");
    } else {
      navigate("/");
    }

    setSearch("");
  };

  return (
    <div style={{scrollBehavior:"smooth"}}>
      <Navbar expand="lg" style={{ position: "fixed", top: "0px", width: "100%", zIndex: "2", border: 'none', boxShadow: "none",background:"white" }}>
        <Container fluid>
          <Navbar.Brand href="#"><img src={HomeLogo} alt="Home Logo" /></Navbar.Brand>
          <Navbar.Toggle style={{ background: '#f58773', position: "absolute", right: "70px", top: "12px" }} aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2  my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='mx-2' id="link" onClick={() => navigate('/')}>Home</Nav.Link>
              <Nav.Link className='mx-2' id="link" onClick={() => navigate('/shop')}>Shop</Nav.Link>
              <Nav.Link className='mx-2' id="link" onClick={() => navigate('/testimonial')}>Testimonial</Nav.Link>
              <Nav.Link className='mx-2' id="link" onClick={() => navigate('/contact')}>Contact Us</Nav.Link>
              {logValue.email && <Nav.Link className='mx-3' id="link" onClick={() => navigate('/')}>{logValue.email}</Nav.Link>}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="me-2"
                aria-label="Search"
              />
              <Button onClick={handleFind} style={{ background: "#f58773", border: "none" }}>Search</Button>
            </Form>
          </Navbar.Collapse>
          <div style={{ display: 'flex', justifyContent: "flex-end" }}>
            <div className='p-2'>
              <span>{cart.length}</span>
              <FontAwesomeIcon style={{ color: "#f58773" }} className='icon1 cursor-pointer' onClick={() => navigate('/cart')} icon={faShoppingCart} />
            </div>
            <div className='p-2'>
              <FontAwesomeIcon className='icon2 cursor-pointer' style={{ color: "#f58773" }} onClick={() => navigate('/login')} icon={faUser} />
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
