import React from 'react'
import { FaUndo, FaChevronLeft} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

function Leftarrow(props) {

  return (
        <NavLink  
        className={props.isInvisible? "left-arrow invisible": "left-arrow"}
        to='/'
        >
            <FaChevronLeft/>
        </NavLink>
  )
}

export default Leftarrow