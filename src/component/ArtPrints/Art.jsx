import React from 'react'
import "./art.css"
import img from "./prof.jpg"
export const Art = () => {
  return (
    <div className="ArtDiv">
<div className="text">
<h1>Art Prints</h1>
<p className="text1">From this Section you can browse the grallery of limited Fine Art prints</p>
<a href="#" className="button">View Gallery</a>
</div>
<div className="image">
<img src={img} alt="" />
</div>

    </div>
  )
}
