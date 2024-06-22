import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import alltopsellingdata from '../../assets/data/Alltopsellingdata';
import './alltopselling.css'
const Alltopselling = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className='Alltopselling'>

            <div className='Topselling-title-top' >
                <p className='Topselling-title' >Top Selling</p>
            </div>
            <div className='Alltopselling-card'>
                <div className='itemcard'>

                    <Row lg={3} md={3} className="g-4">

                        {alltopsellingdata.map((item, idx) => (

                            <Col key={idx}>
                                <Card style={{ width: '26rem' }} className='careers-card'>
                                    <div className='careers-card-content'>
                                    <Card.Img variant="top" src={item.img} />
                                        <Card.Body className='careers-card-body'>

                                            <Card.Text className='careers-card-description'>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </Card.Text>
                                            <Link to={`/topselling/${item.id}`}>
                                                <button className='careers-button'> Book Now</button>
                                            </Link>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>



                        ))}
                    </Row>
                </div>


            </div>

        </div>
    )
}

export default Alltopselling