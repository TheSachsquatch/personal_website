import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Links from './Links.js';
import './App.css'

class LinkCarousel extends Component {
	render() {
		return (
			<Carousel className = "carousel-style" autoPlay ="true" emulateTouch= "true" showArrows = "false" infiniteLoop = "true" showStatus = "false">
				<div className = "slide-holder">
						<>
						<Links link = "https://github.com/TheSachsquatch" name = "github" />
						</>
				</div>

				<div className = "slide-holder">
						<>
						<Links link = "https://www.linkedin.com/in/sachinvijay/" name = "linkedin" />
						</>
				</div>

				<div className = "slide-holder">
						<>
						<Links link = "https://behance.net/sachinvijayaraj" name = "behance?" />
						</>
				</div>
			</Carousel>
		);
	}

}

export default LinkCarousel