import React from 'react'
import "./art.css"
import { Navbar } from '../../component/Navbar/Navbar'
import { Hero } from '../../Component3/Hero/Hero'
export const Art = () => {
  return (
    <div>
        <div class="Nav">
        <Navbar/>
        </div>
    <div class="art-continer">
         <Hero />
         </div>
    </div>
  )
}
