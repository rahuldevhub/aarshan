import React, { useState } from "react";
import '../styles/bookingform.css'

const Bookingform = ({ pricedata }) => {
  var totalcost = 0;
  let shipingcost = 100;
  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const SubmitHandler = (event) => {
    event.preventDefault();
    const config = {
      // Host: "smtp.elasticemail.com",
      // Username: "iamrahulrajendran01@gmail.com",
      // Password: "83899B71DF1EA874CE7D9CCC305AA4692F11",
      // Port:"2525",

      SecureToken:"2506d04e-04c5-4c05-9566-40ba8de3ac82",

      To: "rahulriyazpc@gmail.com",
      From: formState.email,
      Subject: "this is the form my contact",
      Body: `${formState.name} connected`
    }
    if (window.Email) {
      window.Email.send(config).then(() => alert("Booking Sucessfull Kindly to payment"))
    }
  }

  const handlesubmit = () =>{
    
        var options = {
            key: "rzp_test_vqSbStE8csVkyY",
            key_secret: "4Bn8nSrBaFnA8gcgHmJ1mzVg",
            amount: totalcost *100 ,
            currency: "INR",
            name: "Aarshan Photography",
            description: "Testing",
            handler : function(response){
                alert(response.razorpay_payment_id)
            },
            prefill: {
                name: "Aarshan Photography",
                email: "rahulriyazpc@gmail.com",
                contact: "7708133665",
            },
            notes:{
                address: "Razorpay corporate office"
            },
            theme:{
                color:"#000D6B"
            }
        };
        var pay = new window.Razorpay(options);
        pay.open();
    
   }



  totalcost = Number(pricedata) + Number(shipingcost)
  return (
    <div className='Bookingform'>

      <form className="flex  relative flex-col" onSubmit={SubmitHandler} >

        <input onChange={changeHandler} value={formState.name || ''} required placeholder="Enter your name" name="name" type="text" /><br /><br />
        <input onChange={changeHandler} value={formState.number || ''} required placeholder="Enter your number" name="number" type="phonenumber" /><br /><br />
        <input onChange={changeHandler} value={formState.email || ''} required placeholder="Enter your Email" name="email" type="email" /><br /><br />
        <input onChange={changeHandler} value={formState.address || ''} required placeholder="Enter your address" name="address" type="text" /><br /><br />

      
        <h1>Shiping cost: {shipingcost}</h1>
      <h1>product cost: {pricedata }</h1>
      {/* <hr/> */}
      <h1>Grand total: {totalcost}</h1>


        <input value="Book Now"  type="submit" onClick={handlesubmit}></input>

      </form>





    </div>
  )
}

export default Bookingform