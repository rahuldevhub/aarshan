import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../topselling/alltopselling.css'
import alltopsellingdata from '../../assets/data/Alltopsellingdata';
import { Link } from 'react-router-dom';

const Alltopselling = () => {
    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  return (
    <div className='Alltopselling'>
  <div className='itemcard'>

<Row lg={3} md={3} className="g-4">

{alltopsellingdata.map((item, idx) => (

<Col key={idx}>
<Card className='careers-card'>
  <div className='careers-card-content'>
    
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
  )
}

export default Alltopselling