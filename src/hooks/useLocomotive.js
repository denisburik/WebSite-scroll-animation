import { useEffect } from "react";

// Js
import LocomotiveScroll from "locomotive-scroll";

// Css
import './locomotive-scroll.css';

export default function useLocoScroll(start){
    useEffect(() => {
        if(!start) return;

        const scrollEl = document.querySelector('#main-container');
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal'
        });

        // Fix no Bug do locomotive viewport size
        setTimeout(() => {
            window.dispatchEvent(new Event('resize')); 
        }, 200);

    }, [start]);
}
