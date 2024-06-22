import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/Getintouch.css';


import insta from '../assets/socialmedia/instalogo.png'
import facebook from '../assets/socialmedia/fblogo.png'
import xlogo from '../assets/socialmedia/xlogo.png'
import whatsapp from '../assets/socialmedia/whatsapplogo.png'
import linkedin from '../assets/socialmedia/linkedinlogo.png'
import { Link } from 'react-router-dom';

const GetInTouch = () => {
  return (
    <div className='Getintouch' id='contact'>

      <Row  >
  
          {/* <div className='Getintouch-left-content'> */}

            <p className='Getintouch-title' data-aos="fade-right">Get In Touch</p>
            <p className='Getintouch-subtitle'data-aos="fade-right"> We're always happy to chat!  Whether you have a question, want to collaborate, or just to say hi, we're here for you. Follow us on your favorite platforms for updates, inspiration, and exclusive contents.</p>
<Col >
          <Link to={'https://www.instagram.com/ratix_infotech?igsh=Y2dtZWJ1djlqYTQ2&utm_source=qr'}> <img src={insta}    alt='sample' className='socialmedia-img' data-aos="zoom-in-down" data-aos-duration="1000" /> </Link>
        <Link to={'https://www.instagram.com/ratix_infotech?igsh=Y2dtZWJ1djlqYTQ2&utm_source=qr'}> <img src={whatsapp}   alt='sample' className='socialmedia-img' data-aos="zoom-in-down" data-aos-duration="1500" /></Link>
        <Link to={'https://www.instagram.com/ratix_infotech?igsh=Y2dtZWJ1djlqYTQ2&utm_source=qr'}> <img src={facebook}   alt='sample' className='socialmedia-img'  data-aos="zoom-in-down" data-aos-duration="2000"/></Link>
        <Link to={'https://twitter.com/rahulriyaz_'}>  <img src={xlogo}   alt='sample' className='socialmedia-img' data-aos="zoom-in-down" data-aos-duration="3000"/></Link>
        </Col>
          {/* </div> */}
    

      </Row>

    </div>
  )
}

export default GetInTouch