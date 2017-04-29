import React, { Component } from 'react';
// import logo from './logo.svg';
import IGFeed from './IGFeed';
import homeSlide from './homeSlide.png';
import projectSlide from './projectSlide.jpg';
import ken from './ken-urban.JPG';
import './App.css';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;
var Element = Scroll.Element;
var scroller = Scroll.scroller;

class App extends Component {
  scrollToTop() {
    scroll.scrollToTop({
      duration: 200
    });
  }
  scrollToBottom() { 
    scroll.scrollToBottom();
  }

  scrollToProjects(){
    scroller.scrollTo('projectScroll', {
    duration: 400,
    delay: 100,
    smooth: true,
    containerId: 'Project-Slide',  
    })
  }


  render() {
    return (
      <div className="App">  
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Oswald" />
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Julius+Sans+One" />
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Josefin+Sans" />
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Playfair+Display+SC" />
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poiret+One" />
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat" />
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway" />
      

      
        
        <div className="Page-Header">
          <a onClick={this.scrollToTop}><div id="name">KENNETH FARIA</div></a>
            <div className="sub">
              <a onClick={this.scrollToProjects}><span id="projects">PROJECTS </span></a>
              <span id="divider"></span>
              <a><span id="travel">TRAVEL</span></a>
            </div>
        </div>
        <div className="Home-Slide" to="Home">
          <img src={homeSlide} className="home" alt=""/>
            <div id="bar"></div>
            <div className="about">
              <div className="content"></div>
            </div>
            <div className="about-border">
              <span>
                <img src={ken} id="displayPic" alt=""/>
              </span>
              <div id="about-me">
                <span>
                    <p>
                    I remember hacking the shit out of my PSP so I could play PlayStation One games on it 
                    (thereby extending my Gran Turismo 2 career by another 4 years).  Not only does technology 
                    bring us closer to the future, but it also allows us to connect to our past.  My goal 
                    the rest of my life is to connect people in meaningful ways through the use of technology.  
                    If there’s something you and I could work on, please do not hesitate to reach out to me at kennethfaria[@]gmail.com.
                    </p>
                  </span>
              </div>
            </div>
        </div>
        <Element name="projectScroll">  
          <div className="Project-Slide">
            <img src={projectSlide} className="projects" alt=""/>
              <div id="bar"></div>  
              <div className="content">
                <div className="coil-winder">
                  <span><div id="coil-winder-pic">
                    <IGFeed />
                  </div></span>
                  <span><div id="coil-winder-expl">
                  </div></span>
                </div>
                <div className="sports-bra">
                  <span><div id="sports-bra-pic">
                  </div></span>
                  <span><div id="sports-bra-expl">
                  </div></span>  
                </div>
                <div className="pcb-design">
                  <span><div id="pcb-design-pic">
                  </div></span>
                  <span><div id="pcb-design-expl">
                  </div></span>  
                </div>
                <div className="sr1">
                  <span><div id="sr1-pic">
                  </div></span>
                  <span><div id="sr1-expl">
                  </div></span> 
                </div>
                






              </div>
          </div>
        </Element>


      </div>
    );
  }
}

export default App;
