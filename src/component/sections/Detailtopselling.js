import React, { useContext, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Link, useParams } from 'react-router-dom'
import framedata from '../../assets/data/Framedata'
import alltopsellingdata from '../../assets/data/Alltopsellingdata'

const Detailtopselling = () => {
    
    
    const { productId } = useParams();
    // console.log(productId)

// const topsingleproduct = framedata && framedata.find((item) => item.id === Number(productId)  );
const alltopsingleproduct = alltopsellingdata && alltopsellingdata.find((item) => item.id === Number(productId)  );
// const { id, title, subtitle, price, description } = topsingleproduct
const { id, title, subtitle, price, description } = alltopsingleproduct
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Header />
            <div className='Detailtopselling'>
                <Row>
                    <Col lg='6'>
                        left img
                    </Col>
                    <Col lg='6'>

                        <h1>{ id}</h1>
                        <h1>{ title}</h1>
                        

                        <h3>{subtitle}</h3>
                        <h3>{price}</h3>
                        <p>{description}</p>
                        <Link to={'/booking'}>
                        <button>Buy Now</button></Link>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}

export default Detailtopselling