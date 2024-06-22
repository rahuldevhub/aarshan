import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Threeourproducts.css'
import { Link } from 'react-router-dom';
import threeourproduct from '../assets/data/Threeourproductdata';

const ThreeOurproducts = () => {
  return (
    <div className='ThreeOurproducts'>

<div className='topsell-top-content'>
      <p className='topsell-title' >Our Products</p>
<p className='topsell-subtitle' >As an aspiring publishing house, stands apart with our uniqueapproach </p>
<Link to={'/ourproducts'}>
<button>See All</button></Link>
</div>


<div className='itemcard'>
        {threeourproduct  &&  threeourproduct.map((item) => {
          return (
          <div className='topselling-cards'>
            <article key={item.id} >
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Card.Text>{item.price}</Card.Text>

                      <Link to={`/ourproducts/${item.id}`}>
                        <Button variant="primary">Buy Now</Button></Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </article>
          </div>
)
})}
      </div>


    </div>
  )
}

export default ThreeOurproducts