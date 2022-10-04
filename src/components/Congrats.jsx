import React from 'react'
import {FaTimesCircle} from 'react-icons/fa'
import {motion} from "framer-motion"


function Congrats(props) {
  return (
    <div 
    className='congrats-container'
    >
            <motion.div 
            className='congrats-box'
            initial={{scale: 0}}
            animate={{scale: 1}}
            >

              <div className='congrats-x'>
                <button className="x-btn" onClick={props.reset}>
                    <FaTimesCircle/>
                </button>
              </div>
              <div className="congrats-text">
              <h2>Congratulations! </h2>
              <p>Session completed ✅</p>

              <button className='new-session'
              onClick={props.reset}
              >New Session</button>
            </div>
            </motion.div>
      </div>
  )
}

export default Congrats