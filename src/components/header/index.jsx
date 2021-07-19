import React from 'react';

// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


export default function header(){
    return (
        <section className="header" data-scroll-section>
            <ul className="header-menu"  data-scroll data-scroll-speed="-4" data-scroll-delay="0.05" data-scroll-call="bg-light" data-scroll-repeat>
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Projetos</li>
            </ul>
            <div className="content-text">
                <h1 id="header-title" data-scroll data-scroll-speed="2" data-scroll-delay="0.05">BURIK</h1>
                <h2 id="header-subtitle" data-scroll data-scroll-speed="5" data-scroll-delay="0.05">Developer</h2>
            </div>
        </section>
    )
}