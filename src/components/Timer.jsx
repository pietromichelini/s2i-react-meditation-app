import React, { useState, useEffect } from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { FaChevronDown, FaChevronUp} from 'react-icons/fa'

function Timer(props) {
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    const percentage = (props.seconds/props.startTime)*100
  return (
    <div className='timer-container'>
      <div className="pb-container">
        <CircularProgressbarWithChildren
              className='progress-bar'
              counterClockwise={true} 
              strokeWidth={2} 
              value={percentage} 
              text={`${(Math.floor(props.seconds / 60))}:${zeroPad(props.seconds % 60, 2)}`} 
              styles={buildStyles({
                
                // Text size
                // textSize: '1rem',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
            
                // Colors
                pathColor: `#ffffff`,
                textColor: 'white',
                trailColor: 'none',
                background: '#ffffff',
              })}
        >

          <div 
          className={props.isInvisible? "duration-arrows invisible": "duration-arrows"}
          >
              <button 
              className="chevron add-time"
              onClick={props.addTime}
              >
                <FaChevronUp/>
              </button>
              <button 
              className="chevron subtract-time"
              onClick={props.subtractTime}
              >
                <FaChevronDown/>
              </button>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  )
}

export default Timer