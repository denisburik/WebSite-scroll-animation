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
        var count = 0;
        setTimeout(() => {
            locoScroll.on('call', callValue => {
                if(callValue == 'bg-dark'){
                    document.querySelector('#root').style.backgroundColor = '#010101';
                    document.querySelector('#headline').style.color = '#fff';
                    document.querySelector('#header-title').style.color = '#fff';
                    document.querySelector('#header-subtitle').style.color = '#fff';
                }else{
                    document.querySelector('#root').style.backgroundColor = '#fff';
                    document.querySelector('#headline').style.color = '#212121';
                    document.querySelector('#header-title').style.color = '#212121';
                    document.querySelector('#header-subtitle').style.color = '#212121';
                }
            });
          }, 1);

    }, [start]);
}
