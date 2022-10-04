import React from 'react'
import Home from './Home'
import Why from './Why'
import How from './How'
import Navbar from '../components/Navbar'
import CTA from './CTA'

function ScrollPage() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Why/>
        <How/>
        <CTA/>
    </div>
  )
}

export default ScrollPage