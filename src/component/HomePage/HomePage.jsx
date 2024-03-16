import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import img1 from './images/15.jpg';
import img2 from './images/13.jpg';
import "./homepage.css";

export const HomePage = () => {
    const images = [img1, img2]; // List of your background images
    const [currentIndex, setCurrentIndex] = useState(0);
    const [backgroundStyle, setBackgroundStyle] = useState({});
    const fade = useSpring({ opacity: 1, from: { opacity: 0 }, config: config.slow, reset: true });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId); // Cleanup function
    }, [images.length]);

    useEffect(() => {
        setBackgroundStyle({ backgroundImage: `url(${images[currentIndex]})` });
    }, [currentIndex]);

    return (
      
            <div className="header" style={{}}>
            <animated.div className="background" style={{ ...backgroundStyle, ...fade }}/>
     
                <div className="container1">
                    <div className="box">
                        <br />
                        <br />
                        <h4>Commercial & Fine Art</h4>
                        <h1>Architectural Photography</h1>
                      
                        <a href="#" className="btn">My works</a>
                        <a href="/portfolio" className="btn">Portfolio</a>
                    </div>
                </div>
            </div>

    );
};
