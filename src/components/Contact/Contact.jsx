import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar1 from '../navbar/Navbar1';
import Footer from '../Footer/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailError, setEmailError] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const sendMail = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    const serviceID = 'service_ga8wktc';
    const templateID = 'template_8zhkh99';

    emailjs.send(serviceID, templateID, formData, 'PVFmkEVN3xqYLwM3_') // Add your user ID
      .then((res) => {
        setFormData({ name: '', email: '', message: '' });
        console.log('Success:', res.status, res.text);
        alert('Your message was sent successfully');
      })
      .catch((err) => {
        console.log('Failed:', err);
        alert('Oops! Something went wrong, please try again later.');
      });
  };

  return (
    <div>
      <Navbar1/>
      <section id="contact-section" className="text-white" style={{ paddingTop: '75px', paddingBottom: '55px', backgroundColor: '#f58773' }}>
        <div className="container p-3">
          <h1 className="text-center" style={{ textDecoration: 'underline', textUnderlinePosition: 'under' }}><b>Contact</b></h1>
          <div className="row mt-5">
            <div className="col-md-6 p-5 text-white" style={{ backgroundColor: 'dark' }}>
              <h1><b>For More Details</b></h1>
              <h2><b>Contact Me!</b></h2>
              <br /><br /><br />
              <div className="icon align-items-center" style={{ width: '200px', height: '40px', display: 'flex', justifyContent: 'space-around' }}>
                <a href="https://www.instagram.com/faraz__davood"><i className="fa-brands fa-instagram insta icon" style={{color:"black"}}></i></a>
                <a href="https://t.me/farasdavood"><i className="fa-brands fa-telegram teligram icon"  style={{color:"black"}}></i></a>
                <a href="https://www.facebook.com/muhammed.faras.14855"><i className="fa-brands fa-facebook fb icon"  style={{color:"black"}}></i></a>
                <br /><br />
              </div>
            </div>
            <div className="col-md-6 py-3">
              <form onSubmit={sendMail}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="3" className="form-control" value={formData.message} onChange={handleChange}></textarea>
                  {emailError && <span id="emailError" style={{ color: 'red', fontSize: '13px' }}>Please enter a valid email address.</span>}
                </div>
                <button type="submit" className="btn mt-2" style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'black' }}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;