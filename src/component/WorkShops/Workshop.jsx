import React from 'react';
import './workshop.css';
import img1 from './12.jpg';
import img2 from './13.jpg';

export const WorkShop = () => {
    return (
        <div className='Work'>
            <h1>Workshops & Editing Lessons</h1>
            <div className='Images'>
                <img className='img left-img' src={img1} alt="" />
                <img className='img right-img' src={img2} alt="" />
            </div>
            <div className='box'>
            <p className='text'> You can reserve your own seat to learn lessons from A-Z in artistic and commercial architecural photography with Muhammad Almasri</p>
            <a href="#" className="button">See More</a>
            </div>
        </div>
    );
};
