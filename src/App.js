import React, { useEffect, useState } from 'react';
import './App.css';


import Nav from './components/nav/index';
import Header from './components/header/index';
import Featured from './components/featured/index';
import About from './components/about/index';


// Effect scroll
import useLocoScroll from './hooks/useLocomotive';

function App() {
	const [color, setColor] = useState('#f4f4f4');

	function alterBgColor(){
		if (window.pageYOffset > 300) {
			setColor('#010101');   
		}else{
			setColor('#f4f4f4');
		}	
	}
	useLocoScroll(true);
	// alterBgColor();
  	return (
    	<div className={color} data-scroll-container id="main-container">
			<Nav />
			<Header />
			<Featured />
			<About />
			{/* <Portifolio /> */}

		</div>
  	);
}

export default App;
