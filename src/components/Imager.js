import React from 'react';
import './Imager.css';

const Imager = () => {
    return (
        <div className='image-container'>
            <div id='first' className="image-hero">
                <img src="/images/BHIM-UPI.png" alt="Buy me a coffee" />
            </div>
            <div id='third' className="image-hero">
            <img id='thimg' src="/images/scanpay.png" alt="Buy me a coffee" />
        </div>
            <div id='second' className="image-hero">
            <img src="/images/barupi.png" alt="Buy me a coffee" />
        </div>
        
        </div>
    );
};

export default Imager;
