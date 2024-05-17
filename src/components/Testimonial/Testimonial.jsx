import React from "react";


import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Navbar1 from "../navbar/Navbar1";
import Footer from "../Footer/Footer";

export default function Testimonial() {
  return (
    <>
     <Navbar1/>
      <MDBContainer  className="py-5 mt-5">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="10" xl="8" className="text-center">
            <h3 className="mb-4" style={{color:"#3e1f55",fontFamily:"Fantasy"}}>Testimonials</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              The "Baby Cart" itself serves both as a practical means of
              transport and as a symbol of the bond between father and son, as
              well as a tool for combat. It is ingeniously designed to conceal a
              plethora of deadly weapons, including swords, spears, and
              firearms, allowing Ittō to dispatch enemies with swift and deadly
              efficiency.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center">
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://bornbabies.com/cdn/shop/files/2_90463cba-aa3f-461e-8524-622530e7c7ea.jpg?v=1714214501&width=990"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt="Doll"
              />
            </div>
            <h5 className="mb-3 text-[#f58773]">Towel Cum Blanket</h5>
            <h6 className=" mb-3">
              Teddify Pacific Ocean Undersea Queen Mermaid doll for girls soft
              toy Size-30cm
            </h6>

            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon
                  fas
                  icon="star-half-alt"
                  size="sm"
                  className="text-warning"
                />
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://bornbabies.com/cdn/shop/files/1_74f8a9bf-251c-4652-9bec-b8449fbd54be.jpg?v=1709968229&width=713"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt="Dollhouse"
              />
            </div>
            <h5 className="mb-3 text-[#f58773]">Mosquito Protection Net</h5>
            <h6 className=" mb-3">
              Teddify Aquatic Ocean Undersea Queen Mermaid doll for girls soft
              toy Size-30cm
            </h6>

            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://bornbabies.com/cdn/shop/files/1_22be7ea7-6d0b-49db-acc2-a660c72772d1.jpg?v=1706342622&width=713"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt="Cloth"
              />
            </div>
            <h5 className="mb-3 text-[#f58773]">Bed Set Cum Sleeping Bag</h5>
            <h6 className=" mb-3">
              Baby Girls Midi/Knee Length Festive/Wedding Dress (Red,
              Sleeveless)
            </h6>

            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" className="text-warning" />
              </li>
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer/>
    </>
  );
}
