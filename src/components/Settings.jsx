import React, {useState} from 'react'
import {FaClock, FaUndo,  FaWaveForm} from 'react-icons/fa'

function Settings(props) {

  return (
    <div 
    className={props.isInvisible? "settings-container invisible": "settings-container"}
    >
      <select 
      name="sound" 
      id="sound" 
      value={props.settings.sound}
      onChange={props.changeSound}
      className="settings-slct sound fade">
        <option value="silence">🔇</option>
        <option value="rain">🌧️</option>
        <option value="waves">🌊</option>
        <option value="forest">🌲</option>
        <option value="fire">🔥</option>
      </select>
    </div>
  )
}

export default Settings