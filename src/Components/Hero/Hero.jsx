import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'
import arrow_icon from '../Assets/Admin_Assets/arrow_icon.svg'
import hero_image from '../Assets/Frontend_Assets/hero_image.png'
const Hero = () => {
  return (
    <div>
      <div className='hero'>
            <div className="hero-left">
             <h2>New Arrivals Only</h2>
             <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
             </div>
              <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
            </div>
           
            <div className="hero-right">
                <img src={hero_image} alt="" />

            </div>
      </div>
    </div>
  )
}

export default Hero
