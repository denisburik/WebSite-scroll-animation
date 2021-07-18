import React from 'react';
import './App.css';


import Nav from './components/nav/index';
import Header from './components/header/index';
import Featured from './components/featured/index';
import About from './components/about/index';
import useLocoScroll from './hooks/useLocomotive';

function App() {
	
	useLocoScroll(true);
	
  	return (
    	<div className="app" data-scroll-container id="main-container">
			<Nav />
			<Header />
			<Featured />
			<About />
		</div>
  	);
}

export default App;
