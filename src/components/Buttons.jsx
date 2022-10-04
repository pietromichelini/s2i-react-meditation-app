import React from 'react'
import { FaUndoAlt, FaPause, FaPlay} from 'react-icons/fa'

function Buttons(props) {
  return (
    <div 
    className={props.isInvisible? "btn-container invisible": "btn-container"}
    >
          <button 
            className={props.timerFinished? 'timer-btn toggle btn-off' : 'timer-btn toggle'}
            onClick={props.toggle} 
            disabled={props.timerFinished? true : false}
            >
            {props.isActive? <FaPause/>:<FaPlay/>}
          </button>
          <button 
            className="timer-btn reset" 
            onClick={props.reset}
          >
            <FaUndoAlt/>
          </button>
      </div>
  )
}

export default Buttons