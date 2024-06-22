import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Bookingform from '../components/Bookingform'
import { useLocation } from 'react-router-dom'

const Bookingpage = (props) => {
  const location = useLocation()
  // console.log(location)
  return (
    <div className='Bookingpage'>

    <Header/>
    <Bookingform pricedata = {location.state.price} />
    <Footer/>

    </div>
  )
}

export default Bookingpage