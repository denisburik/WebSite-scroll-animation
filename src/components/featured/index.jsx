import React from 'react';

// Img
import coding_1 from './img/coding.jpg';
import coding_2 from './img/coding2.jpeg';

// Css
import './style.css';

export default function featured(){
    return(
        <section className="featured" data-scroll-section>
            <div className="featured-row-layout">
                <h6 data-scroll data-scroll-speed="2" data-scroll-delay="0.02">Coding</h6>
                <img src={coding_2} data-scroll data-scroll-speed="4" data-scroll-delay="0.05" />
            </div>
            <div className="featured-column-layout" data-scroll data-scroll-speed="3" data-scroll-delay="0.05">
                <h6>Code</h6>
                <img src={coding_1} />
            </div>
        </section>
    )
}