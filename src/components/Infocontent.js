import React from 'react'
// import globe from '../Assets/others/globe.webp'
// import setting from '../Assets/others/setting.webp'
// import payment from '../Assets/others/pay.webp'

import '../styles/Infocontent.css'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Infocontent = () => {
  return (
    <div className='supportsystem'>
    <Row className='supportsystem-all-col'>
    <Col lg={4} className='supportsystem-col' data-aos="zoom-in" data-aos-duration="1000"> 
    {/* <img src={globe} alt='sample' className='supportsys-img' /> */}
    <p className='supportsystem-description'>Our support team is available 24/7</p>
    </Col>
    <Col lg={4 } className='supportsystem-col' data-aos="zoom-in" data-aos-duration="2000"> 
    {/* <img src={payment} alt='sample' className='supportsys-img' /> */}
    <p className='supportsystem-description'>Your payment is safe and secure</p>
    </Col><Col lg={4} className='supportsystem-col' data-aos="zoom-in" data-aos-duration="2500"> 
    {/* <img src={setting} alt='sample' className='supportsys-img' /> */}
    <p className='supportsystem-description'>  Having any doubts?  </p>
    </Col>
    
  </Row>

</div>


  )
}

export default Infocontent