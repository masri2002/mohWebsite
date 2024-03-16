import React from 'react'
import {Navbar} from "../../component/Navbar/Navbar"
import {HomePage} from "../../component/HomePage/HomePage"
import {About} from "../../component/About/About"
import {Art} from "../../component/ArtPrints/Art"
import {Asseen} from "../../component/asSeen/Asseen"
import {WorkShop} from "../../component/WorkShops/Workshop"
import {Footer} from "../../component/Footer/Footer"
export const Home = () => {
  return (
    <>
 <div className="navbar-container">
        <Navbar />
      </div>
      <div className="homepage-container">
        <HomePage id="" />
      </div>
      <div className="about-container">
        <About />
      </div>
      <div className='art-container'>
  <Art id="services"/>
</div>
<div className='asSeen-container'>
  <Asseen/>
  </div>
  <div className='WorkShop-container'>
  <WorkShop/>
  </div>
  <div className='Footer-container'>
  <Footer/>
  </div>
  </>
    
  )
}
