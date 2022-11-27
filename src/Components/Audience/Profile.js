import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Richard from './profilepics/richard.jpg';
import Monica from './profilepics/monica.jpg';
import Jared from  './profilepics/jared.jpg';
import Erlich from './profilepics/erlich.jpg';
import Dinesh from './profilepics/dinesh.jpg';
import Elaine from './profilepics/elaine.jpg';


//import cv
import MonicaCV from '../Hire/MonicaCV';



export default function Basic() {
  return (
    <div className="vh-100" style={{ backgroundColor: 'white' }}>
         <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" lg="10" xl="10" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src={Richard}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Richard Smith</MDBCardTitle>
                    <MDBCardText>Animator</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Published</p>
                        <p className="mb-0">41</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">90 000</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">CV</MDBBtn>
                      
                      
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" lg="10" xl="10" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src= {Dinesh}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Dinesh Moonsamy</MDBCardTitle>
                    <MDBCardText>Senior Illustrator</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Published</p>
                        <p className="mb-0">65</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">800</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">7.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">CV</MDBBtn>
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" lg="10" xl="10" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src={Jared}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Jared Jones</MDBCardTitle>
                    <MDBCardText>Game Designer</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Published</p>
                        <p className="mb-0">128</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">9 126</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">9.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">CV</MDBBtn>
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" lg="10" xl="10" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src= {Monica}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Monica Franklin</MDBCardTitle>
                    <MDBCardText>Writer</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Published</p>
                        <p className="mb-0">354</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">10 076</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">CV</MDBBtn>
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


      
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" lg="10" xl="10"className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src={Erlich}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Eric Sodi</MDBCardTitle>
                    <MDBCardText>Cartoonist</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Published</p>
                        <p className="mb-0">91</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">5 776</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">6.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">CV</MDBBtn>
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>



      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" lg="10" xl="10" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src={Elaine}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Thandolwethu Zungu</MDBCardTitle>
                    <MDBCardText>VFX Level Designer </MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Published</p>
                        <p className="mb-0">31</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">1076</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">3.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">CV</MDBBtn>
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}