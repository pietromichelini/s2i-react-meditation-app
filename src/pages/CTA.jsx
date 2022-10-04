import React from 'react'
import { Link } from 'react-router-dom'
import smokeVid from '../assets/video/smoke-slowmo.mp4'
import Footer from '../components/Footer'


function CTA() {
  return (
    <div className='cta-container'>
      {/* <video>
        <source src={smokeVid} loop autoPlay muted type='video/mp4'/>
      </video> */}
      <div className='porcodio'>porcodio</div>
      <video className="cta-video-bg" src={smokeVid} loop autoPlay muted/>
        <center className="cta">
          <h1>Ready to meditate?</h1>
          <Link to="/try">
            <button className="btn meditate">MEDITATE NOW</button>
          </Link>
      </center>
      <Footer/>
    </div>
  )
}
export default CTA