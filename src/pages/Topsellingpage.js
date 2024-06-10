import React from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
// import Completetopsellingprouct from '../component/sections/Completetopsellingprouct'
import '../styles/Topsellingpage.css'
import Alltopselling from '../component/topselling/Alltopselling'
const Topsellingpage = () => {
  return (
    <div>
      <Header/>
      <div className='Topselling-title-top' >
        <p className='Topselling-title' >Top Selling</p>
        </div>
      <Alltopselling/>
      {/* <Completetopsellingprouct/> */}
      <Footer/>
    </div>
  )
}

export default Topsellingpage