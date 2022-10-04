import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

function Benefit(props) {

const [isOpen, setIsOpen] = useState(props.isOpen)

function toggle(){
  setIsOpen(prev => !prev)
}

function less(){
  setIsOpen(false)
}

  return (
  
    <div className={isOpen ? "benefit open" : "benefit"  } onClick={toggle} >
      <OutsideClickHandler onOutsideClick={less}>
      {!isOpen && <h3>{props.title}</h3> }
      {isOpen && <p>{props.summary}</p>}
      </OutsideClickHandler>
    </div>
  
  )
}

export default Benefit