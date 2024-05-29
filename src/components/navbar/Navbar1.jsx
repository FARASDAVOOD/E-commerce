import React, { useContext, useEffect, useState } from 'react';
import "./Navbar1.css";
import HomeLogo from "../../assets/home_logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { mainContext } from '../../pages/context/ContextApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar1() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

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

  const handleLogout = () => {
    setLogValue({ email: '', password: '' });
    toast.success("Logged out successfully");
    navigate('/');
  };

  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Navbar expand="lg" style={{ position: "fixed", top: "0px", width: "100%", zIndex: "2", border: 'none', boxShadow: "none", background: "#f5f5f5" }}>
        <Container fluid>
          <Navbar.Brand href="#"><img src={HomeLogo} alt="Home Logo" className='ml-2' /></Navbar.Brand>
          <Navbar.Toggle style={{ background: '#f58773', position: "absolute", right: "70px", top: "12px" }} aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto flex justify-evenly"
              style={{ maxHeight: '100px', width: "600px" }}
              navbarScroll
            >
              <Nav.Link className='' id="link" onClick={() => navigate('/')}>Home</Nav.Link>
              <Nav.Link className='' id="link" onClick={() => navigate('/shop')}>Shop</Nav.Link>
              <Nav.Link className='' id="link" onClick={() => navigate('/testimonial')}>Testimonial</Nav.Link>
              <Nav.Link className='' id="link" onClick={() => navigate('/contact')}>Contact Us</Nav.Link>
              {logValue.email && <Nav.Link className='' id="link" onClick={() => navigate('/')}>{logValue.email}</Nav.Link>}
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
              {logValue.email ? (
                <FontAwesomeIcon className='icon2 cursor-pointer' style={{ color: "#f58773" }} onClick={handleLogout} icon={faSignOutAlt} />
              ) : (
                <FontAwesomeIcon className='icon2 cursor-pointer' style={{ color: "#f58773" }} onClick={() => navigate('/login')} icon={faUser} />
              )}
            </div>
          </div>
        </Container>
      </Navbar>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Navbar1;
