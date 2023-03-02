import React from 'react'
import './upbookings.css'
import {BsCheck2Circle} from 'react-icons/bs'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

import IMG3 from '../../assets/portfolio3.jpg'

const Services = () => {
  var Bookings= [];
  function fetch(){
    var keys = Object.keys(localStorage);
    for (var key of keys) {
      Bookings.push(JSON.parse(localStorage.getItem(key)));
    }
  console.log(Bookings);
}
fetch();
function refresh(){
  window.location.reload(false);
}

function del(){
  let key = document.getElementById("delete1");
  localStorage.removeItem(key.value);
  console.log("Key value is : " + key.value);
  window.location.reload(false);
}

function edit(){
  let ele = document.getElementById("edit1");
  let key = ele.value;
  const object = Bookings.find(obj => obj.id === key);
  console.log(object);


}



  return (
    <section id='services'>
      <h1>Upcoming Bookings</h1>
      <br/>
      <div className='group'>
        
      <div className='g2'>
      <div className='g3'>

      <button className='btn btn-primary' onClick={edit} target='_blank'>Edit</button>
      </div>
      <div className='g3'>
      <input type="number" id="edit1" placeholder='Type the room Number to Edit'/>
      </div>
      </div>
      <div className='g1'>
      <button type='button' onClick={refresh} className='btn btn-primary'>Refresh</button>
      </div>
      <div className='g2'>
        <div className='g3'>
      <button className='btn btn-primary' onClick={del} target='_blank'>Cancel</button>
      </div>
      <div className='g3'>
      <input type="number" id="delete1" placeholder='Type 
      the room Number to cancel'/>
      </div>

      </div>
      </div>
      <br/><br/>
          <div className='p__container'>

 {       Bookings.map((data)=>{
          return(
            <article className='p__item'>
              <div className="p__item-image">
                  <img src={IMG1} alt='' />
              </div>
    
              <div className='edt'>
    
              <div className='emaildate'>
                <div className='ed'>
              <h5>RoomNumber - {data.roomid}</h5>
              </div>
              <div className='ed'>
              <h5>Email - {data.email}</h5>
              </div>
              
              <div className='ed'>
              <h5>Date - {data.date}</h5> </div>
    
              <div className='ed'>
              <h5>Start Time - {data.st}</h5> </div>
    
              <div className='ed'>
              <h5>End Time - {data.et}</h5> 
              </div>
    
              </div>
              
              </div>
    
              <h3>{data.type}</h3>
              <div className="p__item-cta">
              <a href="#" className='btn' target='_blank'>Amount: 2000/-</a>

              


              </div>
            </article>
           
          )
        })
        }
      </div>  
    </section>
  )
}

export default Services;