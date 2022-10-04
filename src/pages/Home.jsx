import React from 'react'
import lotus from '../assets/image/lotus-cropped.gif'
import {Link} from "react-router-dom"
import {Link as ScrollLink} from 'react-scroll'

function Home() {
  return (
    <div>
        <section id='home' className="home">
          <div className="hero">
            
            <h1>Close your eyes. <br />
              Empty your mind.</h1>
              <div className="hero-btns">
                <Link to="/try">
                <button className="btn meditate">MEDITATE NOW</button>
                </Link>

                <ScrollLink 
                to="why"
                smooth={true}
                offset={-70}
                duration={500}
                >
                <button 
                className="btn why-meditate">WHY MEDITATE?</button>
                </ScrollLink>
              </div>
              <p>Lotus Meditation... the 100% free, quick and easy way to help you meditate. </p>
          </div>
          <img className='lotus-gif' src={lotus} alt="lotus" />
        </section>
      <h2>Home</h2>
    </div>
  )
}

export default Home