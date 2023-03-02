import React from 'react'
import './roomtype.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

import IMG3 from '../../assets/portfolio3.jpg'




const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        Select Your
      </h5>
      <h1>Rooms Type</h1>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG1} alt='' />
          </div>
          <h3>Luxury Class</h3>
          <div className="portfolio__item-cta">
          <a href="" className='btn' >Rs 100/- per hour</a>
          <a href="#about" className='btn btn-primary' >Book Now</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG2} alt='' />
          </div>
          <h3>Premium Class</h3>
          <div className="portfolio__item-cta">
          <a href="" className='btn' >Rs 80/- per hour</a>
          <a href="#about" className='btn btn-primary' >Book Now</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG3} alt='' />
          </div>
          <h3>Normal Class</h3>
          <div className="portfolio__item-cta">
          <a href="#" className='btn' >Rs 60/- per hour</a>
          <a href="#about" className='btn btn-primary' >Book Now</a>
          </div>
        </article>

       

        
      </div>
    </section>
  )
}

export default portfolio