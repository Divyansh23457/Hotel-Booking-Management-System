import React from 'react'
import './form.css'
import Services from '../Upbookings/upbookings'

const about = () => {
function func(){
var save_value = document.getElementById("save")
var room = document.getElementById("room");
var email = document.getElementById("email");
var type = document.getElementById("type");
var date = document.getElementById("date");
var st = document.getElementById("st");
var et = document.getElementById("et");
save_value.onclick = function () {  
    localStorage.setItem(room.value,JSON.stringify({roomid : room.value,email : email.value,type : type.value,date : date.value,st : st.value,et : et.value}));
    window.location.reload(false);
}

}
  return (

    
    
    <section id='about'>
      <h5>Admin Panel</h5>
      <h2>
        Booking System
      </h2>
      <br/>
      <h1>
        Enter Customer Details
      </h1>
      <form >
        <div className='divide'>
          <div className='div1'>
        <h3>Enter Room Number</h3>
          <input type='Number' id='room'  name='name' placeholder='Enter Room Number' required/>
          </div>
          <div className='div1'>
          <h3>Enter E-mail Address</h3>
          <input type='email' id='email' name='email' placeholder='Your Email' required/>
          </div>
          <div className='div1'>
          <h3>Enter RooM Type</h3>
          <input type='text' id='type' name='email' placeholder='Enter Room type' required/>

          
          </div>
          <div className='div1'>
          <h3>Enter Date</h3>
          <input type='Date' id='date' name='email' className='date' placeholder='Enter Room type' required/>

          
          </div>
          <div className='div1'>
          <h3>Start Time</h3>
          <input type='time' id='st' name='email' className='date' placeholder='Enter Room type' required/>

          
          </div>
          <div className='div1'>
          <h3>End Time</h3>
          <input type='time' id='et' name='email' className='date' placeholder='Enter Room type' required/>

          
          </div>
          
          
          
        </div>
          
          <button type='button' id="save" onClick={func} className='btn btn-primary'>Double Click to  Book Now</button>

        </form>

        
        
    </section>
  )
}

export default about;