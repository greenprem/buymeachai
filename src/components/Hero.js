import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <main>
            <div className="hero">
                <img src="/images/batora.png" alt="Buy me a coffee" />
                <h1 id="headd">Get a Chai from your loved ones</h1>
                <p>Accept support. Setup a shop. It’s easier than you think.</p>
                <a href="/join  " className="cta-button">Start my page</a>
                <p className="cta-subtext">It’s free and takes less than a minute!</p>
            </div>
        </main>
    );
};

export default Hero;
