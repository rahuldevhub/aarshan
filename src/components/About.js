import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../styles/About.css'
const About = () => {
    return (
        <div className='About' id='About'>

            <Row className='about-both-col'>
                <Col lg="6" md="6" sm="4" data-aos="zoom-in"  >

                    <div className='about-right-content' >

                        <p className='about-title' data-aos="fade-left">About us</p>
                        <p className='about-subtitle' data-aos="zoom-in">As an aspiring publishing house, Ritera stands apart with our uniqueapproach and unwavering commitment to authors' satisfaction. While wehold respect for other publishers in the field, we embrace differentideologies and possess a talented 
                        crew with a distinct working style. At Ritera, we promise that you'll never be left with doubts or dissatisfaction.
                        </p>
                    </div>
                </Col>


                <Col lg="6" md="6" sm="4" >
                    <div className='about-left-animation'>
                        {/* <Lottie animationData={bookreading} /> */}

                    </div>
                </Col>
            </Row>


        </div>
    )
}

export default About