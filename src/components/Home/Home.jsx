import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Navbar1 from "../navbar/Navbar1";
import Footer from "../Footer/Footer";
import CardProduct from "../Cardproduct/CardProduct";
import CardProductHome from "../CardproductHome/CardProductHome";




function Home() {
  const carouselItems = [
    {
      imageSrc:
        "https://img.freepik.com/free-psd/baby-template-design_23-2151154620.jpg?w=1380&t=st=1715957484~exp=1715958084~hmac=6e97434333877d93dc55ece5b78b22e56bfcd96a51897af4a378c192256f186a",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-psd/baby-template-design_23-2151154608.jpg?w=1380&t=st=1715957285~exp=1715957885~hmac=3abe5b060c235d9efba46afceccdc685e026f79cc1b3d0c9adf1d9f6e34ffaf2",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-psd/baby-template-design_23-2151154649.jpg?w=1380&t=st=1715957396~exp=1715957996~hmac=51fbb53a1ddb1730f9c20a3fbe26dede6578778e6941da7763631c75a63b25ce",
    },
  ];

  return (
    <div>
      
      <Navbar1/>
      <div className="mt-4">
        <Carousel data-bs-theme="dark">
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              <img className="d-block" src={item.imageSrc} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <CardProductHome/>
      <Footer/>
    </div>
  );
}

export default Home;