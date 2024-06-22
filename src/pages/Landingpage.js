import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Landing from '../components/Landing'
import ThreeTopselling from '../components/ThreeTopselling'
import About from '../components/About'
import Serviceweoffer from '../components/Serviceweoffer'
import Albums from '../components/Albums'
import Infocontent from '../components/Infocontent'
import GetInTouch from '../components/GetInTouch'


const Landingpage = () => {
  return (
    <div>
        <Header/>
        <Landing/>
        <ThreeTopselling/>
        <Serviceweoffer/>
        <Albums/>
        <About/>
     <Infocontent/>
     <GetInTouch/>

        <Footer/>
    </div>
  )
}

export default Landingpage