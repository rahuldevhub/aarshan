import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import alltopsellingdata from '../../assets/data/Alltopsellingdata'


const Detailtopselling = () => {

    const navigate = useNavigate()
    var totalcost = 0;
    let shipingcost = 100;
    const { productId } = useParams();

    const alltopsingleproduct = alltopsellingdata && alltopsellingdata.find((item) => item.id === Number(productId));
    const { id, title, subtitle, price, description } = alltopsingleproduct

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    totalcost = Number(price) + Number(shipingcost)
    return (
        <div>
            <Header />
            <div className='Detailtopselling'>
                <Row>
                    <Col lg='6'>
                        {/* <img src={alltopsellingdata.img} alt='frame'> </img> */}
                    </Col>
                    <Col lg='6'>

                        <h1>{id}</h1>
                        <h1>{title}</h1>
                        <h3>{subtitle}</h3>
                        <h3>{price}</h3>
                        <p>{description}</p>
                        <button onClick={() => { navigate('/booking', { replace: true, state: { price } }) }}>Buy Now</button>
                    </Col>
                </Row>
            </div>

            <Footer />
        </div>
    )
}

export default Detailtopselling;
