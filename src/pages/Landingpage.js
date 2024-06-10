import React from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import About from '../component/sections/About'
import Infocontent from '../component/sections/Infocontent'
import Topselling from '../component/sections/Topselling'
import Ourproducts from '../component/sections/Ourproducts'                         
import Landing from '../component/sections/Landing'
import Contact from '../component/sections/Contact'

const Landingpage = () => {
  return (
    <div>
        <Header/>
        <Landing/>
        <Topselling/>
        <About/>
        <Ourproducts/>   
        <Infocontent/>  
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Landingpage