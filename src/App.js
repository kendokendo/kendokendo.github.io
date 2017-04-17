import React, { Component } from 'react';
// import logo from './logo.svg';
import homeSlide from './homeSlide.png';
import projectSlide from './projectSlide.jpg';
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
        
        <div className="Page-Header">
          <a onClick={this.scrollToTop}><div id="name">KENNETH FARIA</div></a>
            <div className="sub">
              <a onClick={this.scrollToProjects}><span id="projects">PROJECTS</span></a>
              <span id="divider"></span>
              <a><span id="travel">TRAVEL</span></a>
            </div>
        </div>
        <div className="Home-Slide" to="Home">
          <img src={homeSlide} className="home" alt=""/>
            <div id="bar"></div>
        </div>
        
        <Element name="projectScroll">  
          <div className="Project-Slide">
            <img src={projectSlide} className="projects" alt=""/>
              <div id="bar"></div>  
          </div>
        </Element>


      </div>
    );
  }
}

export default App;
