import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ScrollPage from './ScrollPage'

import Try from './Try.jsx'


function Pages() {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<ScrollPage/>}/>
            <Route path='/try' element={<Try />}/>
        </Routes>
    </div>
  )
}

export default Pages