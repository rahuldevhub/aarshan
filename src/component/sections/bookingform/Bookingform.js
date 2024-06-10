import React, { useState } from "react";

import Header from '../../header/Header'
import Footer from '../../footer/Footer'

import '../bookingform/bookingform.css'
import Gpay from "../payment/Gpay";



const Bookingform = () => {
  const [formState , setFormState] = useState({});
  const changeHandler = (event)=>{
    setFormState({ ...formState, [event.target.name] : event.target.value })
  }

const SubmitHandler = (event) =>{
  event.preventDefault();
  const config= {
    Host:"",
    Username:"",
    Password:"",

    To:"iamrahulrajendran01@gmail.com",
    From: formState.email,
    Subject:"this is the form my contact",
    Body:`${formState.name} connected`
  }
  if(window.Email){
    window.Email.send(config).then(()=> alert(""))
  }
}
  return (
    <div>
      <Header />
      <div className='Bookingform'>
        <p>Booking Form</p>


        <form className="flex  relative flex-col" >
          <input onChange={changeHandler} value={formState.name || ''} required  placeholder="Enter your name"      name="name"    type="text" /><br/><br/>

          <input onChange={changeHandler} value={formState.number || ''} required  placeholder="Enter your number"  name="number"   type="phonenumber" /><br/><br/>

          <input onChange={changeHandler} value={formState.email || ''} required  placeholder="Enter your Email"    name="email"    type="email" /><br/><br/>

          <input onChange={changeHandler} value={formState.address || ''} required  placeholder="Enter your address" name="address" type="text" /><br/><br/>
      
      <input value= "Book Now" type="submit"></input>
        
        </form>

<Gpay/>
       


      </div>
      <Footer />
    </div>
  )
}

export default Bookingform