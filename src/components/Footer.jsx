import React from 'react'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap'
import { Cardtext, DivF } from '../styles/StyledFooter'
import { Div } from '../styles/ThemeStyled'
//import { IoMdPin } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa';
import { FaRegEnvelope, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';



const Footer = () => {
  return (

    <div >
      <DivF className='p-5'>
        <img src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1646189827/sprint3/logo_vnf1fd.svg" alt="logo" />
      </DivF>
      <div>
        <Div>
          <CardGroup>
            <Cardtext>
              <CardGroup>
                <Cardtext>
                  {/*   <IoMdPin /> */}
                </Cardtext>
                <Cardtext className='text-align:left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua

                </Cardtext>
              </CardGroup>
            </Cardtext>
            <Cardtext>
              <h6><FaPhoneVolume /> +1-543-123-4567<br /></h6>
              <h6><FaRegEnvelope /> example@fylo.com<br /></h6>

            </Cardtext>
            <Cardtext>
              About Us <br />
              Jobs<br />
              Press<br />
              Blog

            </Cardtext>
            <Cardtext>
              Contact Us<br />
              Terms<br />
              Privacy

            </Cardtext>

            <Cardtext>
              <Container>
                <Row>
                  <Col xs={{ order: 'last' }}><FaFacebookF /></Col>
                  <Col xs><FaInstagram /></Col>
                  <Col xs={{ order: 'first' }}><FaTwitter /></Col>
                </Row>
              </Container>
              
              
              

            </Cardtext>
          </CardGroup>
        </Div>


      </div>
      <p class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Luis Garcia</a>.
      </p>
    </div >
  )
}

export default Footer