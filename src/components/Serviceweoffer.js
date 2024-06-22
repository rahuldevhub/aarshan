import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../styles/serviceweoffer.css'
import { Link } from 'react-router-dom';

const Serviceweoffer = () => {

    return (


        <div className='Serviceweoffer'>

            <p className='service-title' >Service we offer</p>
            <div className='service'>
                <Row xs={1} md={1} lg={2} className="g-4 servicerow">
                    <Col>
                        <Link to={'/wedding'}><Card className='Service-card'><Card.Body>
                            {/* <Card.Img variant="top" src={servicedata.img} className='service-card-icon' /> */}
                            <Card.Text className='service-title'><p>Wedding</p></Card.Text></Card.Body></Card></Link>
                    </Col>

                    <Col>
                        <Link to={'/wedding'}><Card className='Service-card'> <Card.Body>
                            {/* <Card.Img variant="top" src={servicedata.img} className='service-card-icon' /> */}
                            <Card.Text className='service-title'><p>Puberty</p></Card.Text></Card.Body></Card></Link>
                    </Col>

                </Row>
                <Row xs={1} md={1} lg={3} >

                    <Col>
                        <Link to={'/wedding'}>  <Card className='Service-card'> <Card.Body>
                            {/* <Card.Img variant="top" src={servicedata.img} className='service-card-icon' /> */}
                            <Card.Text className='service-title'><p>Birthday</p></Card.Text></Card.Body></Card></Link>
                    </Col>
                    <Col>
                        <Link to={'/wedding'}><Card className='Service-card'> <Card.Body>
                            {/* <Card.Img variant="top" src={servicedata.img} className='service-card-icon' /> */}
                            <Card.Text className='service-title'><p>Nalungu</p></Card.Text></Card.Body></Card></Link>
                    </Col>
                    <Col>
                        <Link to={'/wedding'}><Card className='Service-card'> <Card.Body>
                            {/* <Card.Img variant="top" src={servicedata.img} className='service-card-icon' /> */}
                            <Card.Text className='service-title'><p>Short Flim</p></Card.Text></Card.Body></Card></Link>

                    </Col>



                </Row>

            </div>




        </div>
    )
}

export default Serviceweoffer