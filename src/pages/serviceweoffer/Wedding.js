import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import '../../styles/indivualservice.css'
const Wedding = () => {
  const [checkedValues, setValues] = useState([])

  function handleChange(e) {
    if (e.target.checked) {
       setValues([...checkedValues, e.target.value]);
    } else {
       setValues(checkedValues.filter((item) => item !== e.target.value));
    }
 }
//  {allchecked.join(" , ")
console.log( checkedValues.join( ) )
  
  
  return (
    <div className='Wedding'>
      <Header />

      <div className='indivual-title-top' >
        <p className='indivual-title-top2' >Wedding</p>
      </div>

      <div className='ourserviceforindivual'>
        <p className='indivual-heading' >Our Service for Wedding</p>

        <Row className='ourserviceforindivualcontent'>
          <Col lg={6} className='vl'>
            <p>Traditional photoshot</p>
            <p>Traditional photoshot</p>
            <p>Traditional photoshot</p>
            <p>Traditional photoshot</p>
          </Col>
          <Col lg={6}>
            <p>Traditional photoshot</p>
            <p>Traditional photoshot</p>
            <p>Traditional photoshot</p>
            <p>Traditional photoshot</p>
          </Col>
        </Row>

        <div className='Package'>
          <p className='indivual-heading' >Packages</p>

          <Row xs={1} md={2} lg={3} className="g-4 packageall">

            <Card className='level1-card'>
              <Card.Body >
                <div className='card-content'>
                  <p className='level1-title'>Package 1</p>
                  <p className='level1-description'>Essential services with standard cover and interior designs, and eBook formatting for budding authors /Online
                    distribution in India stores.</p>
                  <p className='level1-Price'>₹8,999</p>
                </div>
                <ul className='package-features'>
                  <li>Traditional photo</li>
                  <li>Traditional photo</li>
                  <li>Traditional photo</li>
                  <li>Traditional photo</li>
                  <li>Traditional photo</li>
                </ul>
                <button className='seeallpackages'>Book Now</button>
              </Card.Body>
            </Card>

            <Card className='level1-card'>
              <Card.Body>
                <div className='card-content'>
                  <p className='level1-title'>Package 2</p>
                  <p className='level1-description'>Comprehensive support for aspiring authors with free Author copies, certificate, and and eBook placement on
                    Google and Kobo /Online distribution in India</p>
                  <p className='level1-Price'>₹12,999</p>
                  <ul className='package-features'>
                    <li>Traditional photo</li>
                    <li>Traditional photo</li>
                    <li>Traditional photo</li>
                    <li>Traditional photo</li>
                    <li>Traditional photo</li>
                  </ul>
                  <button className='seeallpackages'>Book Now</button>
                </div>
              </Card.Body>
            </Card>

            <Card className='level1-card'>
              <Card.Body>
                <div className='card-content'>
                  <p className='level1-title'>Package 3</p>
                  <p className='level1-description'>All-inclusive package with International Distribution premium cover and interior design, Prime placement,
                    promotions, and free author session for ambitious authors</p>
                  <p className='level1-Price'>₹29,999</p>
                  <ul className='package-features'>
                    <li>Traditional photo</li>
                    <li>Traditional photo</li>
                    <li>Traditional photo</li>
                    <li>Traditional photo</li>
                    <li>Traditional photo</li>
                  </ul>
                  <button className='seeallpackages'>Book Now</button>
                </div>
              </Card.Body>
            </Card>

          </Row>
        </div>

        <div className='customize'>
          <p className='indivual-heading' >Customize your own package here</p>
          <input onChange={handleChange} type="checkbox" value= {2000}/>Traditional photo &emsp; &emsp; 2000  <br/>
          <input onChange={handleChange} type="checkbox" value= {3000}/>Traditional photo &emsp; &emsp; 3000  <br/>
          <input onChange={handleChange} type="checkbox" value= {4000}/>Traditional photo &emsp; &emsp; 4000  <br/>
       
          <p>{checkedValues}</p>
          
          


        </div>




      </div>
      <Footer />
    </div>
  )
}

export default Wedding