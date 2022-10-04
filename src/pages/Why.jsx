import React,{useState} from 'react'
import data from '../assets/data'
import Benefit from '../components/Benefit'
import {FaLink} from 'react-icons/fa'
 
function Why() {

const [benefits, setBenefits] = useState(data)

const benefitElements = benefits.map(benefit => (
  <Benefit 
  key={benefit.id} 
  isOpen={benefit.isOpen} 
  title={benefit.title}
  summary={benefit.summary}
  />
))

  return (
    <div 
    className='why'
    id='why'
    >
      <div class="Parent">
        <div class="child1">
          {/* empty column to let background image show */}
        </div>
        <div class="child2">
            <center>
                <h1>Why should you meditate?</h1>
                <ul className='benefits-container'>
                  {benefitElements}
              </ul>
              <a target="blank" href='https://www.healthline.com/nutrition/12-benefits-of-meditation'><FaLink/></a>
            </center>
        </div>
    </div>
    </div>
  )
}

export default Why