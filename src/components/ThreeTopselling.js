import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Threetopselling.css'
import { Link } from 'react-router-dom';
import threetopselling from '../assets/data/Threetopsellingdata';


const ThreeTopselling = () => {
  return (
    <div className='ThreeTopselling'>

<div className='topsell-top-content'>
        <p className='topsell-title' >Top Selling</p>
        <p className='topsell-subtitle' >As an aspiring publishing house, stands apart with our uniqueapproach </p>
        <Link to={'/topselling'}>
          <button>See All</button></Link>
      </div>


<div className='itemcard'>
        {threetopselling && threetopselling.map((item) => {
return(
          <div className='topselling-cards'>
            <article key={item.id} >
              <Row>
                <Col>                                                                   
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                    
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Card.Text>{item.price}</Card.Text>
                   
                      <Link to={`/topselling/${item.id}`}>
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

export default ThreeTopselling