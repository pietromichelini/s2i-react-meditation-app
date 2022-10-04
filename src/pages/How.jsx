import React from 'react'
import video from '../assets/video/sh-3mins.mp4'

function How() {
  return (
    <div className='how' id='how'>
      <div class="Parent">
        <center>
        <h1>First time?</h1>
        <p>
          Just follow the instructions in the video below 😉
          </p>
        </center>
        <div className="video-container">
        <video className='how-video' controls>
          <source src={video} type="video/mp4"/>
        </video>
      <p className='credits'>Credits to <a target='blank'  href="https://en.wikipedia.org/wiki/Sam_Harris">Sam Harris</a></p>
        </div>
</div>
    </div>
  )
}

export default How