import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import allourproducts    from '../../../assets/data/Allourprouctdata';
import { Link } from 'react-router-dom';

const Allourproduct = () => {

    useEffect(() => {
        window.scrollTo(0,0)
       }, [])

  return (
    <div className='Allourproduct'>

<div className='Topselling-title-top' >
        <p className='Topselling-title' >Our product</p>
        </div>

        <div className='itemcard'>

<Row lg={3} md={3} className="g-4">

{allourproducts.map((item, idx) => (

<Col key={idx}>
<Card className='careers-card'>
  <div className='careers-card-content'>
    
    <Card.Body className='careers-card-body'>

      <Card.Text className='careers-card-description'>                                       
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </Card.Text>
      <Link to={`/ourproducts/${item.id}`}>
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
  )
}

export default Allourproduct